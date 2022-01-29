"use strict";

exports.__esModule = true;
exports.default = exports.RADIO_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var [name, bem] = (0, _utils.createNamespace)('radio-group');
var radioGroupProps = {
  disabled: Boolean,
  iconSize: _utils.numericProp,
  direction: String,
  modelValue: _utils.unknownProp,
  checkedColor: String
};
var RADIO_KEY = Symbol(name);
exports.RADIO_KEY = RADIO_KEY;

var _default = (0, _vue.defineComponent)({
  name,
  props: radioGroupProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      linkChildren
    } = (0, _use.useChildren)(RADIO_KEY);

    var updateValue = value => emit('update:modelValue', value);

    (0, _vue.watch)(() => props.modelValue, value => emit('change', value));
    linkChildren({
      props,
      updateValue
    });
    (0, _use.useCustomFieldValue)(() => props.modelValue);
    return () => (0, _vue.createVNode)("div", {
      "class": bem([props.direction]),
      "role": "radiogroup"
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;