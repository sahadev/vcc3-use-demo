import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import { ref, watch, reactive, defineComponent } from 'vue'; // Utils

import { isDef, createNamespace, makeNumericProp } from '../utils'; // Composables

import { raf, useRect, doubleRaf, useEventListener, onMountedOrActivated } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { onPopupReopen } from '../composables/on-popup-reopen'; // Components

import { Icon } from '../icon'; // Types

var [name, bem] = createNamespace('notice-bar');
var noticeBarProps = {
  text: String,
  mode: String,
  color: String,
  delay: makeNumericProp(1),
  speed: makeNumericProp(60),
  leftIcon: String,
  wrapable: Boolean,
  background: String,
  scrollable: {
    type: Boolean,
    default: null
  }
};
export default defineComponent({
  name,
  props: noticeBarProps,
  emits: ['close', 'replay'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var wrapWidth = 0;
    var contentWidth = 0;
    var startTimer;
    var wrapRef = ref();
    var contentRef = ref();
    var state = reactive({
      show: true,
      offset: 0,
      duration: 0
    });

    var renderLeftIcon = () => {
      if (slots['left-icon']) {
        return slots['left-icon']();
      }

      if (props.leftIcon) {
        return _createVNode(Icon, {
          "class": bem('left-icon'),
          "name": props.leftIcon
        }, null);
      }
    };

    var getRightIconName = () => {
      if (props.mode === 'closeable') {
        return 'cross';
      }

      if (props.mode === 'link') {
        return 'arrow';
      }
    };

    var onClickRightIcon = event => {
      if (props.mode === 'closeable') {
        state.show = false;
        emit('close', event);
      }
    };

    var renderRightIcon = () => {
      if (slots['right-icon']) {
        return slots['right-icon']();
      }

      var name = getRightIconName();

      if (name) {
        return _createVNode(Icon, {
          "name": name,
          "class": bem('right-icon'),
          "onClick": onClickRightIcon
        }, null);
      }
    };

    var onTransitionEnd = () => {
      state.offset = wrapWidth;
      state.duration = 0; // wait for Vue to render offset
      // using nextTick won't work in iOS14

      raf(() => {
        // use double raf to ensure animation can start
        doubleRaf(() => {
          state.offset = -contentWidth;
          state.duration = (contentWidth + wrapWidth) / +props.speed;
          emit('replay');
        });
      });
    };

    var renderMarquee = () => {
      var ellipsis = props.scrollable === false && !props.wrapable;
      var style = {
        transform: state.offset ? "translateX(" + state.offset + "px)" : '',
        transitionDuration: state.duration + "s"
      };
      return _createVNode("div", {
        "ref": wrapRef,
        "role": "marquee",
        "class": bem('wrap')
      }, [_createVNode("div", {
        "ref": contentRef,
        "style": style,
        "class": [bem('content'), {
          'van-ellipsis': ellipsis
        }],
        "onTransitionend": onTransitionEnd
      }, [slots.default ? slots.default() : props.text])]);
    };

    var reset = () => {
      var {
        delay,
        speed,
        scrollable
      } = props;
      var ms = isDef(delay) ? +delay * 1000 : 0;
      wrapWidth = 0;
      contentWidth = 0;
      state.offset = 0;
      state.duration = 0;
      clearTimeout(startTimer);
      startTimer = setTimeout(() => {
        if (!wrapRef.value || !contentRef.value || scrollable === false) {
          return;
        }

        var wrapRefWidth = useRect(wrapRef).width;
        var contentRefWidth = useRect(contentRef).width;

        if (scrollable || contentRefWidth > wrapRefWidth) {
          doubleRaf(() => {
            wrapWidth = wrapRefWidth;
            contentWidth = contentRefWidth;
            state.offset = -contentWidth;
            state.duration = contentWidth / +speed;
          });
        }
      }, ms);
    };

    onPopupReopen(reset);
    onMountedOrActivated(reset); // fix cache issues with forwards and back history in safari
    // see: https://guwii.com/cache-issues-with-forwards-and-back-history-in-safari/

    useEventListener('pageshow', reset);
    useExpose({
      reset
    });
    watch(() => [props.text, props.scrollable], reset);
    return () => {
      var {
        color,
        wrapable,
        background
      } = props;
      return _withDirectives(_createVNode("div", {
        "role": "alert",
        "class": bem({
          wrapable
        }),
        "style": {
          color,
          background
        }
      }, [renderLeftIcon(), renderMarquee(), renderRightIcon()]), [[_vShow, state.show]]);
    };
  }

});