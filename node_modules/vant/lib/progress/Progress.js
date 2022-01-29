"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var [name, bem] = (0, _utils.createNamespace)('progress');
var progressProps = {
  color: String,
  inactive: Boolean,
  pivotText: String,
  textColor: String,
  showPivot: _utils.truthProp,
  pivotColor: String,
  trackColor: String,
  strokeWidth: _utils.numericProp,
  percentage: {
    type: _utils.numericProp,
    default: 0,
    validator: value => value >= 0 && value <= 100
  }
};

var _default = (0, _vue.defineComponent)({
  name,
  props: progressProps,

  setup(props) {
    var background = (0, _vue.computed)(() => props.inactive ? undefined : props.color);

    var renderPivot = () => {
      var {
        textColor,
        pivotText,
        pivotColor,
        percentage
      } = props;
      var text = pivotText != null ? pivotText : percentage + "%";

      if (props.showPivot && text) {
        var style = {
          color: textColor,
          left: +percentage + "%",
          transform: "translate(-" + +percentage + "%,-50%)",
          background: pivotColor || background.value
        };
        return (0, _vue.createVNode)("span", {
          "style": style,
          "class": bem('pivot', {
            inactive: props.inactive
          })
        }, [text]);
      }
    };

    return () => {
      var {
        trackColor,
        percentage,
        strokeWidth
      } = props;
      var rootStyle = {
        background: trackColor,
        height: (0, _utils.addUnit)(strokeWidth)
      };
      var portionStyle = {
        width: percentage + "%",
        background: background.value
      };
      return (0, _vue.createVNode)("div", {
        "class": bem(),
        "style": rootStyle
      }, [(0, _vue.createVNode)("span", {
        "class": bem('portion', {
          inactive: props.inactive
        }),
        "style": portionStyle
      }, null), renderPivot()]);
    };
  }

});

exports.default = _default;