import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { makeNumericProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';
var [name, bem] = createNamespace('sidebar');
export var SIDEBAR_KEY = Symbol(name);
var sidebarProps = {
  modelValue: makeNumericProp(0)
};
export default defineComponent({
  name,
  props: sidebarProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      linkChildren
    } = useChildren(SIDEBAR_KEY);

    var getActive = () => +props.modelValue;

    var setActive = value => {
      if (value !== getActive()) {
        emit('update:modelValue', value);
        emit('change', value);
      }
    };

    linkChildren({
      getActive,
      setActive
    });
    return () => _createVNode("div", {
      "role": "tablist",
      "class": bem()
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});