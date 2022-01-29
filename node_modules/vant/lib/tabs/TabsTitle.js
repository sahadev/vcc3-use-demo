"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _badge = require("../badge");

var [name, bem] = (0, _utils.createNamespace)('tab');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    id: String,
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: _utils.numericProp,
    isActive: Boolean,
    disabled: Boolean,
    controls: String,
    scrollable: Boolean,
    activeColor: String,
    renderTitle: Function,
    inactiveColor: String,
    showZeroBadge: _utils.truthProp
  },

  setup(props) {
    var style = (0, _vue.computed)(() => {
      var style = {};
      var {
        type,
        color,
        disabled,
        isActive,
        activeColor,
        inactiveColor
      } = props;
      var isCard = type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? activeColor : inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      return style;
    });

    var renderText = () => {
      var Text = (0, _vue.createVNode)("span", {
        "class": bem('text', {
          ellipsis: !props.scrollable
        })
      }, [props.renderTitle ? props.renderTitle() : props.title]);

      if (props.dot || (0, _utils.isDef)(props.badge) && props.badge !== '') {
        return (0, _vue.createVNode)(_badge.Badge, {
          "dot": props.dot,
          "content": props.badge,
          "showZero": props.showZeroBadge
        }, {
          default: () => [Text]
        });
      }

      return Text;
    };

    return () => (0, _vue.createVNode)("div", {
      "id": props.id,
      "role": "tab",
      "class": [bem({
        active: props.isActive,
        disabled: props.disabled
      })],
      "style": style.value,
      "tabindex": props.disabled ? undefined : props.isActive ? 0 : -1,
      "aria-selected": props.isActive,
      "aria-disabled": props.disabled || undefined,
      "aria-controls": props.controls
    }, [renderText()]);
  }

});

exports.default = _default;