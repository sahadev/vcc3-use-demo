"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useTouch = require("../composables/use-touch");

var _useExpose = require("../composables/use-expose");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('swipe-cell');
var swipeCellProps = {
  name: (0, _utils.makeNumericProp)(''),
  disabled: Boolean,
  leftWidth: _utils.numericProp,
  rightWidth: _utils.numericProp,
  beforeClose: Function,
  stopPropagation: Boolean
};

var _default = (0, _vue.defineComponent)({
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
    var root = (0, _vue.ref)();
    var leftRef = (0, _vue.ref)();
    var rightRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      offset: 0,
      dragging: false
    });
    var touch = (0, _useTouch.useTouch)();

    var getWidthByRef = ref => ref.value ? (0, _use.useRect)(ref).width : 0;

    var leftWidth = (0, _vue.computed)(() => (0, _utils.isDef)(props.leftWidth) ? +props.leftWidth : getWidthByRef(leftRef));
    var rightWidth = (0, _vue.computed)(() => (0, _utils.isDef)(props.rightWidth) ? +props.rightWidth : getWidthByRef(rightRef));

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
          (0, _utils.preventDefault)(event, props.stopPropagation);
        }

        state.offset = (0, _utils.clamp)(deltaX.value + startOffset, -rightWidth.value, leftWidth.value);
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
        (0, _utils.callInterceptor)(props.beforeClose, {
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
        return (0, _vue.createVNode)("div", {
          "ref": ref,
          "class": bem(side),
          "onClick": getClickHandler(side, true)
        }, [contentSlot()]);
      }
    };

    (0, _useExpose.useExpose)({
      open,
      close
    });
    (0, _use.useClickAway)(root, () => onClick('outside'), {
      eventName: 'touchstart'
    });
    return () => {
      var wrapperStyle = {
        transform: "translate3d(" + state.offset + "px, 0, 0)",
        transitionDuration: state.dragging ? '0s' : '.6s'
      };
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "class": bem(),
        "onClick": getClickHandler('cell'),
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [(0, _vue.createVNode)("div", {
        "class": bem('wrapper'),
        "style": wrapperStyle
      }, [renderSideContent('left', leftRef), slots.default == null ? void 0 : slots.default(), renderSideContent('right', rightRef)])]);
    };
  }

});

exports.default = _default;