"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

var _onPopupReopen = require("../composables/on-popup-reopen");

var _icon = require("../icon");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('notice-bar');
var noticeBarProps = {
  text: String,
  mode: String,
  color: String,
  delay: (0, _utils.makeNumericProp)(1),
  speed: (0, _utils.makeNumericProp)(60),
  leftIcon: String,
  wrapable: Boolean,
  background: String,
  scrollable: {
    type: Boolean,
    default: null
  }
};

var _default = (0, _vue.defineComponent)({
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
    var wrapRef = (0, _vue.ref)();
    var contentRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      show: true,
      offset: 0,
      duration: 0
    });

    var renderLeftIcon = () => {
      if (slots['left-icon']) {
        return slots['left-icon']();
      }

      if (props.leftIcon) {
        return (0, _vue.createVNode)(_icon.Icon, {
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
        return (0, _vue.createVNode)(_icon.Icon, {
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

      (0, _use.raf)(() => {
        // use double raf to ensure animation can start
        (0, _use.doubleRaf)(() => {
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
      return (0, _vue.createVNode)("div", {
        "ref": wrapRef,
        "role": "marquee",
        "class": bem('wrap')
      }, [(0, _vue.createVNode)("div", {
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
      var ms = (0, _utils.isDef)(delay) ? +delay * 1000 : 0;
      wrapWidth = 0;
      contentWidth = 0;
      state.offset = 0;
      state.duration = 0;
      clearTimeout(startTimer);
      startTimer = setTimeout(() => {
        if (!wrapRef.value || !contentRef.value || scrollable === false) {
          return;
        }

        var wrapRefWidth = (0, _use.useRect)(wrapRef).width;
        var contentRefWidth = (0, _use.useRect)(contentRef).width;

        if (scrollable || contentRefWidth > wrapRefWidth) {
          (0, _use.doubleRaf)(() => {
            wrapWidth = wrapRefWidth;
            contentWidth = contentRefWidth;
            state.offset = -contentWidth;
            state.duration = contentWidth / +speed;
          });
        }
      }, ms);
    };

    (0, _onPopupReopen.onPopupReopen)(reset);
    (0, _use.onMountedOrActivated)(reset); // fix cache issues with forwards and back history in safari
    // see: https://guwii.com/cache-issues-with-forwards-and-back-history-in-safari/

    (0, _use.useEventListener)('pageshow', reset);
    (0, _useExpose.useExpose)({
      reset
    });
    (0, _vue.watch)(() => [props.text, props.scrollable], reset);
    return () => {
      var {
        color,
        wrapable,
        background
      } = props;
      return (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
        "role": "alert",
        "class": bem({
          wrapable
        }),
        "style": {
          color,
          background
        }
      }, [renderLeftIcon(), renderMarquee(), renderRightIcon()]), [[_vue.vShow, state.show]]);
    };
  }

});

exports.default = _default;