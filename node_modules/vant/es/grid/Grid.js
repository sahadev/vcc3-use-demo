import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace, addUnit, truthProp, numericProp, makeNumericProp } from '../utils';
import { BORDER_TOP } from '../utils/constant';
import { useChildren } from '@vant/use';
var [name, bem] = createNamespace('grid');
var gridProps = {
  square: Boolean,
  center: truthProp,
  border: truthProp,
  gutter: numericProp,
  reverse: Boolean,
  iconSize: numericProp,
  direction: String,
  clickable: Boolean,
  columnNum: makeNumericProp(4)
};
export var GRID_KEY = Symbol(name);
export default defineComponent({
  name,
  props: gridProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var {
      linkChildren
    } = useChildren(GRID_KEY);
    linkChildren({
      props
    });
    return () => _createVNode("div", {
      "style": {
        paddingLeft: addUnit(props.gutter)
      },
      "class": [bem(), {
        [BORDER_TOP]: props.border && !props.gutter
      }]
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});