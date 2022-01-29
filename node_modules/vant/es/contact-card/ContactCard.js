import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { truthProp, makeStringProp, createNamespace } from '../utils';
import { Cell } from '../cell';
var [name, bem, t] = createNamespace('contact-card');
var contactCardProps = {
  tel: String,
  name: String,
  type: makeStringProp('add'),
  addText: String,
  editable: truthProp
};
export default defineComponent({
  name,
  props: contactCardProps,
  emits: ['click'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;

    var onClick = event => {
      if (props.editable) {
        emit('click', event);
      }
    };

    var renderContent = () => {
      if (props.type === 'add') {
        return props.addText || t('addText');
      }

      return [_createVNode("div", null, [t('name') + "\uFF1A" + props.name]), _createVNode("div", null, [t('tel') + "\uFF1A" + props.tel])];
    };

    return () => _createVNode(Cell, {
      "center": true,
      "icon": props.type === 'edit' ? 'contact' : 'add-square',
      "class": bem([props.type]),
      "border": false,
      "isLink": props.editable,
      "valueClass": bem('value'),
      "onClick": onClick
    }, {
      value: renderContent
    });
  }

});