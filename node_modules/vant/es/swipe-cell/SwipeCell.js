import { createVNode as _createVNode } from "vue";
import { ref, reactive, computed, defineComponent } from 'vue'; // Utils

import { clamp, isDef, numericProp, preventDefault, callInterceptor, createNamespace, makeNumericProp } from '../utils'; // Composables

import { useRect, useClickAway } from '@vant/use';
import { useTouch } from '../composables/use-touch';
import { useExpose } from '../composables/use-expose'; // Types

var [name, bem] = createNamespace('swipe-cell');
var swipeCellProps = {
  name: makeNumericProp(''),
  disabled: Boolean,
  leftWidth: numericProp,
  rightWidth: numericProp,
  beforeClose: Function,
  stopPropagation: Boolean
};
export default defineComponent({
  name,
  props: swipeCellProps,
  emits: ['open', 'close', 'click'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var opened;
    var lockClick;
    var startOffset;
    var root = ref();
    var leftRef = ref();
    var rightRef = ref();
    var state = reactive({
      offset: 0,
      dragging: false
    });
    var touch = useTouch();

    var getWidthByRef = ref => ref.value ? useRect(ref).width : 0;

    var leftWidth = computed(() => isDef(props.leftWidth) ? +props.leftWidth : getWidthByRef(leftRef));
    var rightWidth = computed(() => isDef(props.rightWidth) ? +props.rightWidth : getWidthByRef(rightRef));

    var open = side => {
      opened = true;
      state.offset = side === 'left' ? leftWidth.value : -rightWidth.value;
      emit('open', {
        name: props.name,
        position: side
      });
    };

    var close = position => {
      state.offset = 0;

      if (opened) {
        opened = false;
        emit('close', {
          name: props.name,
          position
        });
      }
    };

    var toggle = side => {
      var offset = Math.abs(state.offset);
      var THRESHOLD = 0.15;
      var threshold = opened ? 1 - THRESHOLD : THRESHOLD;
      var width = side === 'left' ? leftWidth.value : rightWidth.value;

      if (width && offset > width * threshold) {
        open(side);
      } else {
        close(side);
      }
    };

    var onTouchStart = event => {
      if (!props.disabled) {
        startOffset = state.offset;
        touch.start(event);
      }
    };

    var onTouchMove = event => {
      if (props.disabled) {
        return;
      }

      var {
        deltaX
      } = touch;
      touch.move(event);

      if (touch.isHorizontal()) {
        lockClick = true;
        state.dragging = true;
        var isEdge = !opened || deltaX.value * startOffset < 0;

        if (isEdge) {
          preventDefault(event, props.stopPropagation);
        }

        state.offset = clamp(deltaX.value + startOffset, -rightWidth.value, leftWidth.value);
      }
    };

    var onTouchEnd = () => {
      if (state.dragging) {
        state.dragging = false;
        toggle(state.offset > 0 ? 'left' : 'right'); // compatible with desktop scenario

        setTimeout(() => {
          lockClick = false;
        }, 0);
      }
    };

    var onClick = function (position) {
      if (position === void 0) {
        position = 'outside';
      }

      emit('click', position);

      if (opened && !lockClick) {
        callInterceptor(props.beforeClose, {
          args: [{
            name: props.name,
            position
          }],
          done: () => close(position)
        });
      }
    };

    var getClickHandler = (position, stop) => event => {
      if (stop) {
        event.stopPropagation();
      }

      onClick(position);
    };

    var renderSideContent = (side, ref) => {
      var contentSlot = slots[side];

      if (contentSlot) {
        return _createVNode("div", {
          "ref": ref,
          "class": bem(side),
          "onClick": getClickHandler(side, true)
        }, [contentSlot()]);
      }
    };

    useExpose({
      open,
      close
    });
    useClickAway(root, () => onClick('outside'), {
      eventName: 'touchstart'
    });
    return () => {
      var wrapperStyle = {
        transform: "translate3d(" + state.offset + "px, 0, 0)",
        transitionDuration: state.dragging ? '0s' : '.6s'
      };
      return _createVNode("div", {
        "ref": root,
        "class": bem(),
        "onClick": getClickHandler('cell'),
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [_createVNode("div", {
        "class": bem('wrapper'),
        "style": wrapperStyle
      }, [renderSideContent('left', leftRef), slots.default == null ? void 0 : slots.default(), renderSideContent('right', rightRef)])]);
    };
  }

});