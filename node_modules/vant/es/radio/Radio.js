import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
import { defineComponent } from 'vue'; // Utils

import { pick, createNamespace } from '../utils';
import { RADIO_KEY } from '../radio-group/RadioGroup'; // Composables

import { useParent } from '@vant/use'; // Components

import Checker, { checkerProps } from '../checkbox/Checker';
var [name, bem] = createNamespace('radio');
export default defineComponent({
  name,
  props: checkerProps,
  emits: ['update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      parent
    } = useParent(RADIO_KEY);

    var checked = () => {
      var value = parent ? parent.props.modelValue : props.modelValue;
      return value === props.name;
    };

    var toggle = () => {
      if (parent) {
        parent.updateValue(props.name);
      } else {
        emit('update:modelValue', props.name);
      }
    };

    return () => _createVNode(Checker, _mergeProps({
      "bem": bem,
      "role": "radio",
      "parent": parent,
      "checked": checked(),
      "onToggle": toggle
    }, props), pick(slots, ['default', 'icon']));
  }

});