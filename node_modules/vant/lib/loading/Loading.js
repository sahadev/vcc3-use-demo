"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var [name, bem] = (0, _utils.createNamespace)('loading');
var SpinIcon = Array(12).fill(null).map((_, index) => (0, _vue.createVNode)("i", {
  "class": bem('line', String(index + 1))
}, null));
var CircularIcon = (0, _vue.createVNode)("svg", {
  "class": bem('circular'),
  "viewBox": "25 25 50 50"
}, [(0, _vue.createVNode)("circle", {
  "cx": "50",
  "cy": "50",
  "r": "20",
  "fill": "none"
}, null)]);
var loadingProps = {
  size: _utils.numericProp,
  type: (0, _utils.makeStringProp)('circular'),
  color: String,
  vertical: Boolean,
  textSize: _utils.numericProp,
  textColor: String
};

var _default = (0, _vue.defineComponent)({
  name,
  props: loadingProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var spinnerStyle = (0, _vue.computed)(() => (0, _utils.extend)({
      color: props.color
    }, (0, _utils.getSizeStyle)(props.size)));

    var renderText = () => {
      if (slots.default) {
        var _props$textColor;

        return (0, _vue.createVNode)("span", {
          "class": bem('text'),
          "style": {
            fontSize: (0, _utils.addUnit)(props.textSize),
            color: (_props$textColor = props.textColor) != null ? _props$textColor : props.color
          }
        }, [slots.default()]);
      }
    };

    return () => {
      var {
        type,
        vertical
      } = props;
      return (0, _vue.createVNode)("div", {
        "class": bem([type, {
          vertical
        }])
      }, [(0, _vue.createVNode)("span", {
        "class": bem('spinner', type),
        "style": spinnerStyle.value
      }, [type === 'spinner' ? SpinIcon : CircularIcon]), renderText()]);
    };
  }

});

exports.default = _default;