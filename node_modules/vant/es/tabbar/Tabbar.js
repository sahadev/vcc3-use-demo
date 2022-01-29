import { createVNode as _createVNode } from "vue";
import { ref, defineComponent } from 'vue'; // Utils

import { truthProp, numericProp, getZIndexStyle, createNamespace, callInterceptor, makeNumericProp, BORDER_TOP_BOTTOM } from '../utils'; // Composables

import { useChildren } from '@vant/use';
import { usePlaceholder } from '../composables/use-placeholder';
var [name, bem] = createNamespace('tabbar');
var tabbarProps = {
  route: Boolean,
  fixed: truthProp,
  border: truthProp,
  zIndex: numericProp,
  placeholder: Boolean,
  activeColor: String,
  beforeChange: Function,
  inactiveColor: String,
  modelValue: makeNumericProp(0),
  safeAreaInsetBottom: {
    type: Boolean,
    default: null
  }
};
export var TABBAR_KEY = Symbol(name);
export default defineComponent({
  name,
  props: tabbarProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var root = ref();
    var {
      linkChildren
    } = useChildren(TABBAR_KEY);
    var renderPlaceholder = usePlaceholder(root, bem); // enable safe-area-inset-bottom by default when fixed

    var enableSafeArea = () => {
      var _props$safeAreaInsetB;

      return (_props$safeAreaInsetB = props.safeAreaInsetBottom) != null ? _props$safeAreaInsetB : props.fixed;
    };

    var renderTabbar = () => {
      var {
        fixed,
        zIndex,
        border
      } = props;
      return _createVNode("div", {
        "ref": root,
        "role": "tablist",
        "style": getZIndexStyle(zIndex),
        "class": [bem({
          fixed
        }), {
          [BORDER_TOP_BOTTOM]: border,
          'van-safe-area-bottom': enableSafeArea()
        }]
      }, [slots.default == null ? void 0 : slots.default()]);
    };

    var setActive = (active, afterChange) => {
      callInterceptor(props.beforeChange, {
        args: [active],

        done() {
          emit('update:modelValue', active);
          emit('change', active);
          afterChange();
        }

      });
    };

    linkChildren({
      props,
      setActive
    });
    return () => {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderTabbar);
      }

      return renderTabbar();
    };
  }

});