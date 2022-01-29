import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { extend, createNamespace } from '../utils';
import { ACTION_BAR_KEY } from '../action-bar/ActionBar'; // Composables

import { useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useRoute, routeProps } from '../composables/use-route'; // Components

import { Button } from '../button';
var [name, bem] = createNamespace('action-bar-button');
var actionBarButtonProps = extend({}, routeProps, {
  type: String,
  text: String,
  icon: String,
  color: String,
  loading: Boolean,
  disabled: Boolean
});
export default defineComponent({
  name,
  props: actionBarButtonProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var route = useRoute();
    var {
      parent,
      index
    } = useParent(ACTION_BAR_KEY);
    var isFirst = computed(() => {
      if (parent) {
        var prev = parent.children[index.value - 1];
        return !(prev && 'isButton' in prev);
      }
    });
    var isLast = computed(() => {
      if (parent) {
        var next = parent.children[index.value + 1];
        return !(next && 'isButton' in next);
      }
    });
    useExpose({
      isButton: true
    });
    return () => {
      var {
        type,
        icon,
        text,
        color,
        loading,
        disabled
      } = props;
      return _createVNode(Button, {
        "class": bem([type, {
          last: isLast.value,
          first: isFirst.value
        }]),
        "size": "large",
        "type": type,
        "icon": icon,
        "color": color,
        "loading": loading,
        "disabled": disabled,
        "onClick": route
      }, {
        default: () => [slots.default ? slots.default() : text]
      });
    };
  }

});