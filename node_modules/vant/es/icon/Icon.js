import { createVNode as _createVNode } from "vue";
import { defineComponent, inject, computed } from 'vue';
import { addUnit, numericProp, makeStringProp, createNamespace } from '../utils';
import { Badge } from '../badge';
import { CONFIG_PROVIDER_KEY } from '../config-provider/ConfigProvider';
var [name, bem] = createNamespace('icon');

var isImage = name => name == null ? void 0 : name.includes('/');

var iconProps = {
  dot: Boolean,
  tag: makeStringProp('i'),
  name: String,
  size: numericProp,
  badge: numericProp,
  color: String,
  classPrefix: String
};
export default defineComponent({
  name,
  props: iconProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var config = inject(CONFIG_PROVIDER_KEY, null);
    var classPrefix = computed(() => props.classPrefix || (config == null ? void 0 : config.iconPrefix) || bem());
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
      return _createVNode(Badge, {
        "dot": dot,
        "tag": tag,
        "content": badge,
        "class": [classPrefix.value, isImageIcon ? '' : classPrefix.value + "-" + name],
        "style": {
          color,
          fontSize: addUnit(size)
        }
      }, {
        default: () => [slots.default == null ? void 0 : slots.default(), isImageIcon && _createVNode("img", {
          "class": bem('image'),
          "src": name
        }, null)]
      });
    };
  }

});