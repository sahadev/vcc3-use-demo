import { createVNode as _createVNode } from "vue";
import { provide, computed, defineComponent } from 'vue';
import { kebabCase, makeStringProp, createNamespace } from '../utils';
var [name, bem] = createNamespace('config-provider');
export var CONFIG_PROVIDER_KEY = Symbol(name);
var configProviderProps = {
  tag: makeStringProp('div'),
  themeVars: Object,
  iconPrefix: String
};

function mapThemeVarsToCSSVars(themeVars) {
  var cssVars = {};
  Object.keys(themeVars).forEach(key => {
    cssVars["--van-" + kebabCase(key)] = themeVars[key];
  });
  return cssVars;
}

export default defineComponent({
  name,
  props: configProviderProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var style = computed(() => {
      if (props.themeVars) {
        return mapThemeVarsToCSSVars(props.themeVars);
      }
    });
    provide(CONFIG_PROVIDER_KEY, props);
    return () => _createVNode(props.tag, {
      "class": bem(),
      "style": style.value
    }, {
      default: () => [slots.default == null ? void 0 : slots.default()]
    });
  }

});