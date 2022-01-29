import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { truthProp, createNamespace, BORDER_TOP_BOTTOM } from '../utils';
import { useChildren } from '@vant/use';
var [name, bem] = createNamespace('collapse');
export var COLLAPSE_KEY = Symbol(name);
var collapseProps = {
  border: truthProp,
  accordion: Boolean,
  modelValue: {
    type: [String, Number, Array],
    default: ''
  }
};

function validateModelValue(modelValue, accordion) {
  if (accordion && Array.isArray(modelValue)) {
    console.error('[Vant] Collapse: "v-model" should not be Array in accordion mode');
    return false;
  }

  if (!accordion && !Array.isArray(modelValue)) {
    console.error('[Vant] Collapse: "v-model" should be Array in non-accordion mode');
    return false;
  }

  return true;
}

export default defineComponent({
  name,
  props: collapseProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      linkChildren
    } = useChildren(COLLAPSE_KEY);

    var updateName = name => {
      emit('change', name);
      emit('update:modelValue', name);
    };

    var toggle = (name, expanded) => {
      var {
        accordion,
        modelValue
      } = props;

      if (accordion) {
        updateName(name === modelValue ? '' : name);
      } else if (expanded) {
        updateName(modelValue.concat(name));
      } else {
        updateName(modelValue.filter(activeName => activeName !== name));
      }
    };

    var isExpanded = name => {
      var {
        accordion,
        modelValue
      } = props;

      if (process.env.NODE_ENV !== 'production' && !validateModelValue(modelValue, accordion)) {
        return false;
      }

      return accordion ? modelValue === name : modelValue.includes(name);
    };

    linkChildren({
      toggle,
      isExpanded
    });
    return () => _createVNode("div", {
      "class": [bem(), {
        [BORDER_TOP_BOTTOM]: props.border
      }]
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});