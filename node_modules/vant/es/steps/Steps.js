import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { makeStringProp, makeNumericProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';
var [name, bem] = createNamespace('steps');
var stepsProps = {
  active: makeNumericProp(0),
  direction: makeStringProp('horizontal'),
  activeIcon: makeStringProp('checked'),
  iconPrefix: String,
  finishIcon: String,
  activeColor: String,
  inactiveIcon: String,
  inactiveColor: String
};
export var STEPS_KEY = Symbol(name);
export default defineComponent({
  name,
  props: stepsProps,
  emits: ['click-step'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      linkChildren
    } = useChildren(STEPS_KEY);

    var onClickStep = index => emit('click-step', index);

    linkChildren({
      props,
      onClickStep
    });
    return () => _createVNode("div", {
      "class": bem([props.direction])
    }, [_createVNode("div", {
      "class": bem('items')
    }, [slots.default == null ? void 0 : slots.default()])]);
  }

});