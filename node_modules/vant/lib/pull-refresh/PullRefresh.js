"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useTouch = require("../composables/use-touch");

var _loading = require("../loading");

// Utils
// Composables
// Components
var [name, bem, t] = (0, _utils.createNamespace)('pull-refresh');
var DEFAULT_HEAD_HEIGHT = 50;
var TEXT_STATUS = ['pulling', 'loosing', 'success'];
var pullRefreshProps = {
  disabled: Boolean,
  modelValue: Boolean,
  headHeight: (0, _utils.makeNumericProp)(DEFAULT_HEAD_HEIGHT),
  successText: String,
  pullingText: String,
  loosingText: String,
  loadingText: String,
  pullDistance: _utils.numericProp,
  successDuration: (0, _utils.makeNumericProp)(500),
  animationDuration: (0, _utils.makeNumericProp)(300)
};

var _default = (0, _vue.defineComponent)({
  name,
  props: pullRefreshProps,
  emits: ['refresh', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var reachTop;
    var root = (0, _vue.ref)();
    var scrollParent = (0, _use.useScrollParent)(root);
    var state = (0, _vue.reactive)({
      status: 'normal',
      distance: 0,
      duration: 0
    });
    var touch = (0, _useTouch.useTouch)();

    var getHeadStyle = () => {
      if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
        return {
          height: props.headHeight + "px"
        };
      }
    };

    var isTouchable = () => state.status !== 'loading' && state.status !== 'success' && !props.disabled;

    var ease = distance => {
      var pullDistance = +(props.pullDistance || props.headHeight);

      if (distance > pullDistance) {
        if (distance < pullDistance * 2) {
          distance = pullDistance + (distance - pullDistance) / 2;
        } else {
          distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4;
        }
      }

      return Math.round(distance);
    };

    var setStatus = (distance, isLoading) => {
      var pullDistance = +(props.pullDistance || props.headHeight);
      state.distance = distance;

      if (isLoading) {
        state.status = 'loading';
      } else if (distance === 0) {
        state.status = 'normal';
      } else if (distance < pullDistance) {
        state.status = 'pulling';
      } else {
        state.status = 'loosing';
      }
    };

    var getStatusText = () => {
      var {
        status
      } = state;

      if (status === 'normal') {
        return '';
      }

      return props[status + "Text"] || t(status);
    };

    var renderStatus = () => {
      var {
        status,
        distance
      } = state;

      if (slots[status]) {
        return slots[status]({
          distance
        });
      }

      var nodes = [];

      if (TEXT_STATUS.includes(status)) {
        nodes.push((0, _vue.createVNode)("div", {
          "class": bem('text')
        }, [getStatusText()]));
      }

      if (status === 'loading') {
        nodes.push((0, _vue.createVNode)(_loading.Loading, {
          "class": bem('loading')
        }, {
          default: getStatusText
        }));
      }

      return nodes;
    };

    var showSuccessTip = () => {
      state.status = 'success';
      setTimeout(() => {
        setStatus(0);
      }, +props.successDuration);
    };

    var checkPosition = event => {
      reachTop = (0, _utils.getScrollTop)(scrollParent.value) === 0;

      if (reachTop) {
        state.duration = 0;
        touch.start(event);
      }
    };

    var onTouchStart = event => {
      if (isTouchable()) {
        checkPosition(event);
      }
    };

    var onTouchMove = event => {
      if (isTouchable()) {
        if (!reachTop) {
          checkPosition(event);
        }

        var {
          deltaY
        } = touch;
        touch.move(event);

        if (reachTop && deltaY.value >= 0 && touch.isVertical()) {
          (0, _utils.preventDefault)(event);
          setStatus(ease(deltaY.value));
        }
      }
    };

    var onTouchEnd = () => {
      if (reachTop && touch.deltaY.value && isTouchable()) {
        state.duration = +props.animationDuration;

        if (state.status === 'loosing') {
          setStatus(+props.headHeight, true);
          emit('update:modelValue', true); // ensure value change can be watched

          (0, _vue.nextTick)(() => emit('refresh'));
        } else {
          setStatus(0);
        }
      }
    };

    (0, _vue.watch)(() => props.modelValue, value => {
      state.duration = +props.animationDuration;

      if (value) {
        setStatus(+props.headHeight, true);
      } else if (slots.success || props.successText) {
        showSuccessTip();
      } else {
        setStatus(0, false);
      }
    });
    return () => {
      var trackStyle = {
        transitionDuration: state.duration + "ms",
        transform: state.distance ? "translate3d(0," + state.distance + "px, 0)" : ''
      };
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "class": bem()
      }, [(0, _vue.createVNode)("div", {
        "class": bem('track'),
        "style": trackStyle,
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [(0, _vue.createVNode)("div", {
        "class": bem('head'),
        "style": getHeadStyle()
      }, [renderStatus()]), slots.default == null ? void 0 : slots.default()])]);
    };
  }

});

exports.default = _default;