"use strict";

exports.__esModule = true;
exports.default = exports.STEPS_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var [name, bem] = (0, _utils.createNamespace)('steps');
var stepsProps = {
  active: (0, _utils.makeNumericProp)(0),
  direction: (0, _utils.makeStringProp)('horizontal'),
  activeIcon: (0, _utils.makeStringProp)('checked'),
  iconPrefix: String,
  finishIcon: String,
  activeColor: String,
  inactiveIcon: String,
  inactiveColor: String
};
var STEPS_KEY = Symbol(name);
exports.STEPS_KEY = STEPS_KEY;

var _default = (0, _vue.defineComponent)({
  name,
  props: stepsProps,
  emits: ['click-step'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      linkChildren
    } = (0, _use.useChildren)(STEPS_KEY);

    var onClickStep = index => emit('click-step', index);

    linkChildren({
      props,
      onClickStep
    });
    return () => (0, _vue.createVNode)("div", {
      "class": bem([props.direction])
    }, [(0, _vue.createVNode)("div", {
      "class": bem('items')
    }, [slots.default == null ? void 0 : slots.default()])]);
  }

});

exports.default = _default;