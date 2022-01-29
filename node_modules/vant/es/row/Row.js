import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { truthProp, makeStringProp, makeNumericProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';
var [name, bem] = createNamespace('row');
export var ROW_KEY = Symbol(name);
var rowProps = {
  tag: makeStringProp('div'),
  wrap: truthProp,
  align: String,
  gutter: makeNumericProp(0),
  justify: String
};
export default defineComponent({
  name,
  props: rowProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var {
      children,
      linkChildren
    } = useChildren(ROW_KEY);
    var groups = computed(() => {
      var groups = [[]];
      var totalSpan = 0;
      children.forEach((child, index) => {
        totalSpan += Number(child.span);

        if (totalSpan > 24) {
          groups.push([index]);
          totalSpan -= 24;
        } else {
          groups[groups.length - 1].push(index);
        }
      });
      return groups;
    });
    var spaces = computed(() => {
      var gutter = Number(props.gutter);
      var spaces = [];

      if (!gutter) {
        return spaces;
      }

      groups.value.forEach(group => {
        var averagePadding = gutter * (group.length - 1) / group.length;
        group.forEach((item, index) => {
          if (index === 0) {
            spaces.push({
              right: averagePadding
            });
          } else {
            var left = gutter - spaces[item - 1].right;
            var right = averagePadding - left;
            spaces.push({
              left,
              right
            });
          }
        });
      });
      return spaces;
    });
    linkChildren({
      spaces
    });
    return () => {
      var {
        tag,
        wrap,
        align,
        justify
      } = props;
      return _createVNode(tag, {
        "class": bem({
          ["align-" + align]: align,
          ["justify-" + justify]: justify,
          nowrap: !wrap
        })
      }, {
        default: () => [slots.default == null ? void 0 : slots.default()]
      });
    };
  }

});