import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { addUnit, truthProp, numericProp, createNamespace } from '../utils';
var [name, bem] = createNamespace('progress');
var progressProps = {
  color: String,
  inactive: Boolean,
  pivotText: String,
  textColor: String,
  showPivot: truthProp,
  pivotColor: String,
  trackColor: String,
  strokeWidth: numericProp,
  percentage: {
    type: numericProp,
    default: 0,
    validator: value => value >= 0 && value <= 100
  }
};
export default defineComponent({
  name,
  props: progressProps,

  setup(props) {
    var background = computed(() => props.inactive ? undefined : props.color);

    var renderPivot = () => {
      var {
        textColor,
        pivotText,
        pivotColor,
        percentage
      } = props;
      var text = pivotText != null ? pivotText : percentage + "%";

      if (props.showPivot && text) {
        var style = {
          color: textColor,
          left: +percentage + "%",
          transform: "translate(-" + +percentage + "%,-50%)",
          background: pivotColor || background.value
        };
        return _createVNode("span", {
          "style": style,
          "class": bem('pivot', {
            inactive: props.inactive
          })
        }, [text]);
      }
    };

    return () => {
      var {
        trackColor,
        percentage,
        strokeWidth
      } = props;
      var rootStyle = {
        background: trackColor,
        height: addUnit(strokeWidth)
      };
      var portionStyle = {
        width: percentage + "%",
        background: background.value
      };
      return _createVNode("div", {
        "class": bem(),
        "style": rootStyle
      }, [_createVNode("span", {
        "class": bem('portion', {
          inactive: props.inactive
        }),
        "style": portionStyle
      }, null), renderPivot()]);
    };
  }

});