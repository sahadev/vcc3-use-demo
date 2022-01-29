"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _icon = require("../icon");

var [name, bem] = (0, _utils.createNamespace)('tag');
var tagProps = {
  size: String,
  mark: Boolean,
  show: _utils.truthProp,
  type: (0, _utils.makeStringProp)('default'),
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  closeable: Boolean
};

var _default = (0, _vue.defineComponent)({
  name,
  props: tagProps,
  emits: ['close'],

  setup(props, _ref) {
    var {
      slots,
      emit
    } = _ref;

    var onClose = event => {
      event.stopPropagation();
      emit('close', event);
    };

    var getStyle = () => {
      if (props.plain) {
        return {
          color: props.textColor || props.color,
          borderColor: props.color
        };
      }

      return {
        color: props.textColor,
        background: props.color
      };
    };

    var renderTag = () => {
      var {
        type,
        mark,
        plain,
        round,
        size,
        closeable
      } = props;
      var classes = {
        mark,
        plain,
        round
      };

      if (size) {
        classes[size] = size;
      }

      var CloseIcon = closeable && (0, _vue.createVNode)(_icon.Icon, {
        "name": "cross",
        "class": bem('close'),
        "onClick": onClose
      }, null);
      return (0, _vue.createVNode)("span", {
        "style": getStyle(),
        "class": bem([classes, type])
      }, [slots.default == null ? void 0 : slots.default(), CloseIcon]);
    };

    return () => (0, _vue.createVNode)(_vue.Transition, {
      "name": props.closeable ? 'van-fade' : undefined
    }, {
      default: () => [props.show ? renderTag() : null]
    });
  }

});

exports.default = _default;