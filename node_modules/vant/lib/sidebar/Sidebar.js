"use strict";

exports.__esModule = true;
exports.default = exports.SIDEBAR_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var [name, bem] = (0, _utils.createNamespace)('sidebar');
var SIDEBAR_KEY = Symbol(name);
exports.SIDEBAR_KEY = SIDEBAR_KEY;
var sidebarProps = {
  modelValue: (0, _utils.makeNumericProp)(0)
};

var _default = (0, _vue.defineComponent)({
  name,
  props: sidebarProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      linkChildren
    } = (0, _use.useChildren)(SIDEBAR_KEY);

    var getActive = () => +props.modelValue;

    var setActive = value => {
      if (value !== getActive()) {
        emit('update:modelValue', value);
        emit('change', value);
      }
    };

    linkChildren({
      getActive,
      setActive
    });
    return () => (0, _vue.createVNode)("div", {
      "role": "tablist",
      "class": bem()
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;