import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { watch, reactive, defineComponent } from 'vue'; // Utils

import { isMobile, createNamespace, extend } from '../utils'; // Components

import { Cell } from '../cell';
import { Form } from '../form';
import { Field } from '../field';
import { Button } from '../button';
import { Switch } from '../switch';
var [name, bem, t] = createNamespace('contact-edit');
var DEFAULT_CONTACT = {
  tel: '',
  name: ''
};
var contactEditProps = {
  isEdit: Boolean,
  isSaving: Boolean,
  isDeleting: Boolean,
  showSetDefault: Boolean,
  setDefaultLabel: String,
  contactInfo: {
    type: Object,
    default: () => extend({}, DEFAULT_CONTACT)
  },
  telValidator: {
    type: Function,
    default: isMobile
  }
};
export default defineComponent({
  name,
  props: contactEditProps,
  emits: ['save', 'delete', 'change-default'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var contact = reactive(extend({}, DEFAULT_CONTACT, props.contactInfo));

    var onSave = () => {
      if (!props.isSaving) {
        emit('save', contact);
      }
    };

    var onDelete = () => emit('delete', contact);

    var renderButtons = () => _createVNode("div", {
      "class": bem('buttons')
    }, [_createVNode(Button, {
      "block": true,
      "round": true,
      "type": "danger",
      "text": t('save'),
      "class": bem('button'),
      "loading": props.isSaving,
      "nativeType": "submit"
    }, null), props.isEdit && _createVNode(Button, {
      "block": true,
      "round": true,
      "text": t('delete'),
      "class": bem('button'),
      "loading": props.isDeleting,
      "onClick": onDelete
    }, null)]);

    var renderSwitch = () => _createVNode(Switch, {
      "modelValue": contact.isDefault,
      "onUpdate:modelValue": $event => contact.isDefault = $event,
      "size": 24,
      "onChange": checked => emit('change-default', checked)
    }, null);

    var renderSetDefault = () => {
      if (props.showSetDefault) {
        return _createVNode(Cell, {
          "title": props.setDefaultLabel,
          "class": bem('switch-cell'),
          "border": false
        }, {
          'right-icon': renderSwitch
        });
      }
    };

    watch(() => props.contactInfo, value => extend(contact, DEFAULT_CONTACT, value));
    return () => _createVNode(Form, {
      "class": bem(),
      "onSubmit": onSave
    }, {
      default: () => [_createVNode("div", {
        "class": bem('fields')
      }, [_createVNode(Field, {
        "modelValue": contact.name,
        "onUpdate:modelValue": $event => contact.name = $event,
        "clearable": true,
        "label": t('name'),
        "rules": [{
          required: true,
          message: t('nameEmpty')
        }],
        "maxlength": "30",
        "placeholder": t('name')
      }, null), _createVNode(Field, {
        "modelValue": contact.tel,
        "onUpdate:modelValue": $event => contact.tel = $event,
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "rules": [{
          validator: props.telValidator,
          message: t('telInvalid')
        }],
        "placeholder": t('tel')
      }, null)]), renderSetDefault(), renderButtons()]
    });
  }

});