"use strict";

exports.__esModule = true;
exports.default = exports.CHECKBOX_GROUP_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('checkbox-group');
var checkboxGroupProps = {
  max: _utils.numericProp,
  disabled: Boolean,
  iconSize: _utils.numericProp,
  direction: String,
  modelValue: (0, _utils.makeArrayProp)(),
  checkedColor: String
};
var CHECKBOX_GROUP_KEY = Symbol(name);
exports.CHECKBOX_GROUP_KEY = CHECKBOX_GROUP_KEY;

var _default = (0, _vue.defineComponent)({
  name,
  props: checkboxGroupProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      children,
      linkChildren
    } = (0, _use.useChildren)(CHECKBOX_GROUP_KEY);

    var updateValue = value => emit('update:modelValue', value);

    var toggleAll = function (options) {
      if (options === void 0) {
        options = {};
      }

      if (typeof options === 'boolean') {
        options = {
          checked: options
        };
      }

      var {
        checked,
        skipDisabled
      } = options;
      var checkedChildren = children.filter(item => {
        if (!item.props.bindGroup) {
          return false;
        }

        if (item.props.disabled && skipDisabled) {
          return item.checked.value;
        }

        return checked != null ? checked : !item.checked.value;
      });
      var names = checkedChildren.map(item => item.name);
      updateValue(names);
    };

    (0, _vue.watch)(() => props.modelValue, value => emit('change', value));
    (0, _useExpose.useExpose)({
      toggleAll
    });
    (0, _use.useCustomFieldValue)(() => props.modelValue);
    linkChildren({
      props,
      updateValue
    });
    return () => (0, _vue.createVNode)("div", {
      "class": bem([props.direction])
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;