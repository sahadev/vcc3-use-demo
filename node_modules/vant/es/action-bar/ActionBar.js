import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { truthProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';
var [name, bem] = createNamespace('action-bar');
export var ACTION_BAR_KEY = Symbol(name);
var actionBarProps = {
  safeAreaInsetBottom: truthProp
};
export default defineComponent({
  name,
  props: actionBarProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var {
      linkChildren
    } = useChildren(ACTION_BAR_KEY);
    linkChildren();
    return () => _createVNode("div", {
      "class": [bem(), {
        'van-safe-area-bottom': props.safeAreaInsetBottom
      }]
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});