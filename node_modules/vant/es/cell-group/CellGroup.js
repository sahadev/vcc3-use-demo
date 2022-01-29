import { Fragment as _Fragment, createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
import { defineComponent } from 'vue';
import { truthProp, createNamespace, BORDER_TOP_BOTTOM } from '../utils';
var [name, bem] = createNamespace('cell-group');
var cellGroupProps = {
  title: String,
  inset: Boolean,
  border: truthProp
};
export default defineComponent({
  name,
  inheritAttrs: false,
  props: cellGroupProps,

  setup(props, _ref) {
    var {
      slots,
      attrs
    } = _ref;

    var renderGroup = () => _createVNode("div", _mergeProps({
      "class": [bem({
        inset: props.inset
      }), {
        [BORDER_TOP_BOTTOM]: props.border && !props.inset
      }]
    }, attrs), [slots.default == null ? void 0 : slots.default()]);

    var renderTitle = () => _createVNode("div", {
      "class": bem('title', {
        inset: props.inset
      })
    }, [slots.title ? slots.title() : props.title]);

    return () => {
      if (props.title || slots.title) {
        return _createVNode(_Fragment, null, [renderTitle(), renderGroup()]);
      }

      return renderGroup();
    };
  }

});