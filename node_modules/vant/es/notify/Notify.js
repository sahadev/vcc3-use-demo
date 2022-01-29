import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { extend, numericProp, unknownProp, makeStringProp, createNamespace } from '../utils';
import { Popup } from '../popup';
import { popupSharedProps } from '../popup/shared';
var [name, bem] = createNamespace('notify');
var notifyProps = extend({}, popupSharedProps, {
  type: makeStringProp('danger'),
  color: String,
  message: numericProp,
  className: unknownProp,
  background: String,
  lockScroll: Boolean
});
export default defineComponent({
  name,
  props: notifyProps,
  emits: ['update:show'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;

    var updateShow = show => emit('update:show', show);

    return () => _createVNode(Popup, {
      "show": props.show,
      "class": [bem([props.type]), props.className],
      "style": {
        color: props.color,
        background: props.background
      },
      "overlay": false,
      "position": "top",
      "duration": 0.2,
      "lockScroll": props.lockScroll,
      "onUpdate:show": updateShow
    }, {
      default: () => [slots.default ? slots.default() : props.message]
    });
  }

});