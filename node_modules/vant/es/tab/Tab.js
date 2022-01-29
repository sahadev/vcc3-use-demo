import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import { ref, watch, provide, computed, nextTick, defineComponent } from 'vue'; // Utils

import { extend, truthProp, unknownProp, numericProp, createNamespace } from '../utils';
import { TABS_KEY } from '../tabs/Tabs'; // Composables

import { useParent } from '@vant/use';
import { useId } from '../composables/use-id';
import { useExpose } from '../composables/use-expose';
import { routeProps } from '../composables/use-route';
import { TAB_STATUS_KEY } from '../composables/use-tab-status'; // Components

import { SwipeItem } from '../swipe-item';
var [name, bem] = createNamespace('tab');
var tabProps = extend({}, routeProps, {
  dot: Boolean,
  name: numericProp,
  badge: numericProp,
  title: String,
  disabled: Boolean,
  titleClass: unknownProp,
  titleStyle: [String, Object],
  showZeroBadge: truthProp
});
export default defineComponent({
  name,
  props: tabProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var id = useId();
    var inited = ref(false);
    var {
      parent,
      index
    } = useParent(TABS_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <Tab> must be a child component of <Tabs>.');
      }

      return;
    }

    var getName = () => {
      var _props$name;

      return (_props$name = props.name) != null ? _props$name : index.value;
    };

    var init = () => {
      inited.value = true;

      if (parent.props.lazyRender) {
        nextTick(() => {
          parent.onRendered(getName(), props.title);
        });
      }
    };

    var active = computed(() => {
      var isActive = getName() === parent.currentName.value;

      if (isActive && !inited.value) {
        init();
      }

      return isActive;
    });
    watch(() => props.title, () => {
      parent.setLine();
      parent.scrollIntoView();
    });
    provide(TAB_STATUS_KEY, active);
    return () => {
      var label = parent.id + "-" + index.value;
      var {
        animated,
        swipeable,
        scrollspy,
        lazyRender
      } = parent.props;

      if (!slots.default && !animated) {
        return;
      }

      var show = scrollspy || active.value;

      if (animated || swipeable) {
        return _createVNode(SwipeItem, {
          "id": id,
          "role": "tabpanel",
          "class": bem('panel-wrapper', {
            inactive: !active.value
          }),
          "tabindex": active.value ? 0 : -1,
          "aria-hidden": !active.value,
          "aria-labelledby": label
        }, {
          default: () => [_createVNode("div", {
            "class": bem('panel')
          }, [slots.default == null ? void 0 : slots.default()])]
        });
      }

      var shouldRender = inited.value || scrollspy || !lazyRender;
      var Content = shouldRender ? slots.default == null ? void 0 : slots.default() : null;
      useExpose({
        id
      });
      return _withDirectives(_createVNode("div", {
        "id": id,
        "role": "tabpanel",
        "class": bem('panel'),
        "tabindex": show ? 0 : -1,
        "aria-labelledby": label
      }, [Content]), [[_vShow, show]]);
    };
  }

});