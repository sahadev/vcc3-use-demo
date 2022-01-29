"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('count-down');
var countDownProps = {
  time: (0, _utils.makeNumericProp)(0),
  format: (0, _utils.makeStringProp)('HH:mm:ss'),
  autoStart: _utils.truthProp,
  millisecond: Boolean
};

var _default = (0, _vue.defineComponent)({
  name,
  props: countDownProps,
  emits: ['change', 'finish'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      start,
      pause,
      reset,
      current
    } = (0, _use.useCountDown)({
      time: +props.time,
      millisecond: props.millisecond,
      onChange: current => emit('change', current),
      onFinish: () => emit('finish')
    });
    var timeText = (0, _vue.computed)(() => (0, _utils2.parseFormat)(props.format, current.value));

    var resetTime = () => {
      reset(+props.time);

      if (props.autoStart) {
        start();
      }
    };

    (0, _vue.watch)(() => props.time, resetTime, {
      immediate: true
    });
    (0, _useExpose.useExpose)({
      start,
      pause,
      reset: resetTime
    });
    return () => (0, _vue.createVNode)("div", {
      "role": "timer",
      "class": bem()
    }, [slots.default ? slots.default(current.value) : timeText.value]);
  }

});

exports.default = _default;