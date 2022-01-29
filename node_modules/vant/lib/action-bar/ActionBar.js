"use strict";

exports.__esModule = true;
exports.default = exports.ACTION_BAR_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var [name, bem] = (0, _utils.createNamespace)('action-bar');
var ACTION_BAR_KEY = Symbol(name);
exports.ACTION_BAR_KEY = ACTION_BAR_KEY;
var actionBarProps = {
  safeAreaInsetBottom: _utils.truthProp
};

var _default = (0, _vue.defineComponent)({
  name,
  props: actionBarProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var {
      linkChildren
    } = (0, _use.useChildren)(ACTION_BAR_KEY);
    linkChildren();
    return () => (0, _vue.createVNode)("div", {
      "class": [bem(), {
        'van-safe-area-bottom': props.safeAreaInsetBottom
      }]
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;