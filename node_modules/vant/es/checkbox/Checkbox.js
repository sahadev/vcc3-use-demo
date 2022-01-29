import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
import { watch, computed, defineComponent } from 'vue'; // Utils

import { createNamespace, extend, pick, truthProp } from '../utils';
import { CHECKBOX_GROUP_KEY } from '../checkbox-group/CheckboxGroup'; // Composables

import { useParent, useCustomFieldValue } from '@vant/use';
import { useExpose } from '../composables/use-expose'; // Components

import Checker, { checkerProps } from './Checker'; // Types

var [name, bem] = createNamespace('checkbox');
var checkboxProps = extend({}, checkerProps, {
  bindGroup: truthProp
});
export default defineComponent({
  name,
  props: checkboxProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      parent
    } = useParent(CHECKBOX_GROUP_KEY);

    var setParentValue = checked => {
      var {
        name
      } = props;
      var {
        max,
        modelValue
      } = parent.props;
      var value = modelValue.slice();

      if (checked) {
        var overlimit = max && value.length >= max;

        if (!overlimit && !value.includes(name)) {
          value.push(name);

          if (props.bindGroup) {
            parent.updateValue(value);
          }
        }
      } else {
        var index = value.indexOf(name);

        if (index !== -1) {
          value.splice(index, 1);

          if (props.bindGroup) {
            parent.updateValue(value);
          }
        }
      }
    };

    var checked = computed(() => {
      if (parent && props.bindGroup) {
        return parent.props.modelValue.indexOf(props.name) !== -1;
      }

      return !!props.modelValue;
    });

    var toggle = function (newValue) {
      if (newValue === void 0) {
        newValue = !checked.value;
      }

      if (parent && props.bindGroup) {
        setParentValue(newValue);
      } else {
        emit('update:modelValue', newValue);
      }
    };

    watch(() => props.modelValue, value => emit('change', value));
    useExpose({
      toggle,
      props,
      checked
    });
    useCustomFieldValue(() => props.modelValue);
    return () => _createVNode(Checker, _mergeProps({
      "bem": bem,
      "role": "checkbox",
      "parent": parent,
      "checked": checked.value,
      "onToggle": toggle
    }, props), pick(slots, ['default', 'icon']));
  }

});