import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { extend, addUnit, numericProp, getSizeStyle, makeStringProp, createNamespace } from '../utils';
var [name, bem] = createNamespace('loading');
var SpinIcon = Array(12).fill(null).map((_, index) => _createVNode("i", {
  "class": bem('line', String(index + 1))
}, null));

var CircularIcon = _createVNode("svg", {
  "class": bem('circular'),
  "viewBox": "25 25 50 50"
}, [_createVNode("circle", {
  "cx": "50",
  "cy": "50",
  "r": "20",
  "fill": "none"
}, null)]);

var loadingProps = {
  size: numericProp,
  type: makeStringProp('circular'),
  color: String,
  vertical: Boolean,
  textSize: numericProp,
  textColor: String
};
export default defineComponent({
  name,
  props: loadingProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var spinnerStyle = computed(() => extend({
      color: props.color
    }, getSizeStyle(props.size)));

    var renderText = () => {
      if (slots.default) {
        var _props$textColor;

        return _createVNode("span", {
          "class": bem('text'),
          "style": {
            fontSize: addUnit(props.textSize),
            color: (_props$textColor = props.textColor) != null ? _props$textColor : props.color
          }
        }, [slots.default()]);
      }
    };

    return () => {
      var {
        type,
        vertical
      } = props;
      return _createVNode("div", {
        "class": bem([type, {
          vertical
        }])
      }, [_createVNode("span", {
        "class": bem('spinner', type),
        "style": spinnerStyle.value
      }, [type === 'spinner' ? SpinIcon : CircularIcon]), renderText()]);
    };
  }

});