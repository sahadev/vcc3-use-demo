import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { numericProp, createNamespace, makeNumericProp, makeStringProp } from '../utils';
import { useParent } from '@vant/use';
import { ROW_KEY } from '../row/Row';
var [name, bem] = createNamespace('col');
var colProps = {
  tag: makeStringProp('div'),
  span: makeNumericProp(0),
  offset: numericProp
};
export default defineComponent({
  name,
  props: colProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var {
      parent,
      index
    } = useParent(ROW_KEY);
    var style = computed(() => {
      if (!parent) {
        return;
      }

      var {
        spaces
      } = parent;

      if (spaces && spaces.value && spaces.value[index.value]) {
        var {
          left,
          right
        } = spaces.value[index.value];
        return {
          paddingLeft: left ? left + "px" : null,
          paddingRight: right ? right + "px" : null
        };
      }
    });
    return () => {
      var {
        tag,
        span,
        offset
      } = props;
      return _createVNode(tag, {
        "style": style.value,
        "class": bem({
          [span]: span,
          ["offset-" + offset]: offset
        })
      }, {
        default: () => [slots.default == null ? void 0 : slots.default()]
      });
    };
  }

});