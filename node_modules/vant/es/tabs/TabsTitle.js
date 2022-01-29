import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { isDef, truthProp, numericProp, createNamespace } from '../utils';
import { Badge } from '../badge';
var [name, bem] = createNamespace('tab');
export default defineComponent({
  name,
  props: {
    id: String,
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: numericProp,
    isActive: Boolean,
    disabled: Boolean,
    controls: String,
    scrollable: Boolean,
    activeColor: String,
    renderTitle: Function,
    inactiveColor: String,
    showZeroBadge: truthProp
  },

  setup(props) {
    var style = computed(() => {
      var style = {};
      var {
        type,
        color,
        disabled,
        isActive,
        activeColor,
        inactiveColor
      } = props;
      var isCard = type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? activeColor : inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      return style;
    });

    var renderText = () => {
      var Text = _createVNode("span", {
        "class": bem('text', {
          ellipsis: !props.scrollable
        })
      }, [props.renderTitle ? props.renderTitle() : props.title]);

      if (props.dot || isDef(props.badge) && props.badge !== '') {
        return _createVNode(Badge, {
          "dot": props.dot,
          "content": props.badge,
          "showZero": props.showZeroBadge
        }, {
          default: () => [Text]
        });
      }

      return Text;
    };

    return () => _createVNode("div", {
      "id": props.id,
      "role": "tab",
      "class": [bem({
        active: props.isActive,
        disabled: props.disabled
      })],
      "style": style.value,
      "tabindex": props.disabled ? undefined : props.isActive ? 0 : -1,
      "aria-selected": props.isActive,
      "aria-disabled": props.disabled || undefined,
      "aria-controls": props.controls
    }, [renderText()]);
  }

});