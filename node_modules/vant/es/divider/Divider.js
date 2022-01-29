import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { truthProp, makeStringProp, createNamespace } from '../utils';
var [name, bem] = createNamespace('divider');
var dividerProps = {
  dashed: Boolean,
  hairline: truthProp,
  contentPosition: makeStringProp('center')
};
export default defineComponent({
  name,
  props: dividerProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    return () => _createVNode("div", {
      "role": "separator",
      "class": bem({
        dashed: props.dashed,
        hairline: props.hairline,
        ["content-" + props.contentPosition]: !!slots.default
      })
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});