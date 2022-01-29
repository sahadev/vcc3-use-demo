import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { defineComponent } from 'vue';
import { extend, createNamespace, unknownProp, numericProp } from '../utils';
import { ACTION_BAR_KEY } from '../action-bar/ActionBar'; // Composables

import { useParent } from '@vant/use';
import { useRoute, routeProps } from '../composables/use-route'; // Components

import { Icon } from '../icon';
import { Badge } from '../badge';
var [name, bem] = createNamespace('action-bar-icon');
var actionBarIconProps = extend({}, routeProps, {
  dot: Boolean,
  text: String,
  icon: String,
  color: String,
  badge: numericProp,
  iconClass: unknownProp,
  iconPrefix: String
});
export default defineComponent({
  name,
  props: actionBarIconProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var route = useRoute();
    useParent(ACTION_BAR_KEY);

    var renderIcon = () => {
      var {
        dot,
        badge,
        icon,
        color,
        iconClass,
        iconPrefix
      } = props;

      if (slots.icon) {
        return _createVNode(Badge, {
          "dot": dot,
          "content": badge,
          "class": bem('icon')
        }, {
          default: slots.icon
        });
      }

      return _createVNode(Icon, {
        "tag": "div",
        "dot": dot,
        "name": icon,
        "badge": badge,
        "color": color,
        "class": [bem('icon'), iconClass],
        "classPrefix": iconPrefix
      }, null);
    };

    return () => _createVNode("div", {
      "role": "button",
      "class": bem(),
      "tabindex": 0,
      "onClick": route
    }, [renderIcon(), slots.default ? slots.default() : props.text]);
  }

});