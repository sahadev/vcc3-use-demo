"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var [name, bem] = (0, _utils.createNamespace)('divider');
var dividerProps = {
  dashed: Boolean,
  hairline: _utils.truthProp,
  contentPosition: (0, _utils.makeStringProp)('center')
};

var _default = (0, _vue.defineComponent)({
  name,
  props: dividerProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    return () => (0, _vue.createVNode)("div", {
      "role": "separator",
      "class": bem({
        dashed: props.dashed,
        hairline: props.hairline,
        ["content-" + props.contentPosition]: !!slots.default
      })
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;