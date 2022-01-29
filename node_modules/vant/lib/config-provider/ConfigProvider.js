"use strict";

exports.__esModule = true;
exports.default = exports.CONFIG_PROVIDER_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var [name, bem] = (0, _utils.createNamespace)('config-provider');
var CONFIG_PROVIDER_KEY = Symbol(name);
exports.CONFIG_PROVIDER_KEY = CONFIG_PROVIDER_KEY;
var configProviderProps = {
  tag: (0, _utils.makeStringProp)('div'),
  themeVars: Object,
  iconPrefix: String
};

function mapThemeVarsToCSSVars(themeVars) {
  var cssVars = {};
  Object.keys(themeVars).forEach(key => {
    cssVars["--van-" + (0, _utils.kebabCase)(key)] = themeVars[key];
  });
  return cssVars;
}

var _default = (0, _vue.defineComponent)({
  name,
  props: configProviderProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var style = (0, _vue.computed)(() => {
      if (props.themeVars) {
        return mapThemeVarsToCSSVars(props.themeVars);
      }
    });
    (0, _vue.provide)(CONFIG_PROVIDER_KEY, props);
    return () => (0, _vue.createVNode)(props.tag, {
      "class": bem(),
      "style": style.value
    }, {
      default: () => [slots.default == null ? void 0 : slots.default()]
    });
  }

});

exports.default = _default;