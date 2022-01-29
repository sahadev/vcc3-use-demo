import { createVNode as _createVNode } from "vue";
import { watch, defineComponent } from 'vue'; // Utils

import { numericProp, createNamespace, makeArrayProp } from '../utils'; // Composables

import { useChildren, useCustomFieldValue } from '@vant/use';
import { useExpose } from '../composables/use-expose'; // Types

var [name, bem] = createNamespace('checkbox-group');
var checkboxGroupProps = {
  max: numericProp,
  disabled: Boolean,
  iconSize: numericProp,
  direction: String,
  modelValue: makeArrayProp(),
  checkedColor: String
};
export var CHECKBOX_GROUP_KEY = Symbol(name);
export default defineComponent({
  name,
  props: checkboxGroupProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      children,
      linkChildren
    } = useChildren(CHECKBOX_GROUP_KEY);

    var updateValue = value => emit('update:modelValue', value);

    var toggleAll = function (options) {
      if (options === void 0) {
        options = {};
      }

      if (typeof options === 'boolean') {
        options = {
          checked: options
        };
      }

      var {
        checked,
        skipDisabled
      } = options;
      var checkedChildren = children.filter(item => {
        if (!item.props.bindGroup) {
          return false;
        }

        if (item.props.disabled && skipDisabled) {
          return item.checked.value;
        }

        return checked != null ? checked : !item.checked.value;
      });
      var names = checkedChildren.map(item => item.name);
      updateValue(names);
    };

    watch(() => props.modelValue, value => emit('change', value));
    useExpose({
      toggleAll
    });
    useCustomFieldValue(() => props.modelValue);
    linkChildren({
      props,
      updateValue
    });
    return () => _createVNode("div", {
      "class": bem([props.direction])
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});