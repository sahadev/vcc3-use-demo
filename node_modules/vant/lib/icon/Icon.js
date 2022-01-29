"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _badge = require("../badge");

var _ConfigProvider = require("../config-provider/ConfigProvider");

var [name, bem] = (0, _utils.createNamespace)('icon');

var isImage = name => name == null ? void 0 : name.includes('/');

var iconProps = {
  dot: Boolean,
  tag: (0, _utils.makeStringProp)('i'),
  name: String,
  size: _utils.numericProp,
  badge: _utils.numericProp,
  color: String,
  classPrefix: String
};

var _default = (0, _vue.defineComponent)({
  name,
  props: iconProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var config = (0, _vue.inject)(_ConfigProvider.CONFIG_PROVIDER_KEY, null);
    var classPrefix = (0, _vue.computed)(() => props.classPrefix || (config == null ? void 0 : config.iconPrefix) || bem());
    return () => {
      var {
        tag,
        dot,
        name,
        size,
        badge,
        color
      } = props;
      var isImageIcon = isImage(name);
      return (0, _vue.createVNode)(_badge.Badge, {
        "dot": dot,
        "tag": tag,
        "content": badge,
        "class": [classPrefix.value, isImageIcon ? '' : classPrefix.value + "-" + name],
        "style": {
          color,
          fontSize: (0, _utils.addUnit)(size)
        }
      }, {
        default: () => [slots.default == null ? void 0 : slots.default(), isImageIcon && (0, _vue.createVNode)("img", {
          "class": bem('image'),
          "src": name
        }, null)]
      });
    };
  }

});

exports.default = _default;