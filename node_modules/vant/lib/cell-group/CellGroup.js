"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var [name, bem] = (0, _utils.createNamespace)('cell-group');
var cellGroupProps = {
  title: String,
  inset: Boolean,
  border: _utils.truthProp
};

var _default = (0, _vue.defineComponent)({
  name,
  inheritAttrs: false,
  props: cellGroupProps,

  setup(props, _ref) {
    var {
      slots,
      attrs
    } = _ref;

    var renderGroup = () => (0, _vue.createVNode)("div", (0, _vue.mergeProps)({
      "class": [bem({
        inset: props.inset
      }), {
        [_utils.BORDER_TOP_BOTTOM]: props.border && !props.inset
      }]
    }, attrs), [slots.default == null ? void 0 : slots.default()]);

    var renderTitle = () => (0, _vue.createVNode)("div", {
      "class": bem('title', {
        inset: props.inset
      })
    }, [slots.title ? slots.title() : props.title]);

    return () => {
      if (props.title || slots.title) {
        return (0, _vue.createVNode)(_vue.Fragment, null, [renderTitle(), renderGroup()]);
      }

      return renderGroup();
    };
  }

});

exports.default = _default;