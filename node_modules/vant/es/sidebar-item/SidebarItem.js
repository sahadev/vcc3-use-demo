import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue'; // Utils

import { extend, numericProp, createNamespace } from '../utils';
import { SIDEBAR_KEY } from '../sidebar/Sidebar'; // Composables

import { useParent } from '@vant/use';
import { useRoute, routeProps } from '../composables/use-route'; // Components

import { Badge } from '../badge';
var [name, bem] = createNamespace('sidebar-item');
var sidebarItemProps = extend({}, routeProps, {
  dot: Boolean,
  title: String,
  badge: numericProp,
  disabled: Boolean
});
export default defineComponent({
  name,
  props: sidebarItemProps,
  emits: ['click'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var route = useRoute();
    var {
      parent,
      index
    } = useParent(SIDEBAR_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <SidebarItem> must be a child component of <Sidebar>.');
      }

      return;
    }

    var onClick = () => {
      if (props.disabled) {
        return;
      }

      emit('click', index.value);
      parent.setActive(index.value);
      route();
    };

    return () => {
      var {
        dot,
        badge,
        title,
        disabled
      } = props;
      var selected = index.value === parent.getActive();
      return _createVNode("div", {
        "role": "tab",
        "class": bem({
          select: selected,
          disabled
        }),
        "tabindex": disabled ? undefined : 0,
        "aria-selected": selected,
        "onClick": onClick
      }, [_createVNode(Badge, {
        "dot": dot,
        "content": badge,
        "class": bem('text')
      }, {
        default: () => [slots.title ? slots.title() : title]
      })]);
    };
  }

});