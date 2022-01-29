import { createVNode as _createVNode } from "vue";
import { watch, defineComponent } from 'vue';
import { unknownProp, numericProp, createNamespace } from '../utils';
import { useChildren, useCustomFieldValue } from '@vant/use';
var [name, bem] = createNamespace('radio-group');
var radioGroupProps = {
  disabled: Boolean,
  iconSize: numericProp,
  direction: String,
  modelValue: unknownProp,
  checkedColor: String
};
export var RADIO_KEY = Symbol(name);
export default defineComponent({
  name,
  props: radioGroupProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      linkChildren
    } = useChildren(RADIO_KEY);

    var updateValue = value => emit('update:modelValue', value);

    watch(() => props.modelValue, value => emit('change', value));
    linkChildren({
      props,
      updateValue
    });
    useCustomFieldValue(() => props.modelValue);
    return () => _createVNode("div", {
      "class": bem([props.direction]),
      "role": "radiogroup"
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});