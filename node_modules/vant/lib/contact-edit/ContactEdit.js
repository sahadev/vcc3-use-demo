"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _cell = require("../cell");

var _form = require("../form");

var _field = require("../field");

var _button = require("../button");

var _switch = require("../switch");

// Utils
// Components
var [name, bem, t] = (0, _utils.createNamespace)('contact-edit');
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
    default: () => (0, _utils.extend)({}, DEFAULT_CONTACT)
  },
  telValidator: {
    type: Function,
    default: _utils.isMobile
  }
};

var _default = (0, _vue.defineComponent)({
  name,
  props: contactEditProps,
  emits: ['save', 'delete', 'change-default'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var contact = (0, _vue.reactive)((0, _utils.extend)({}, DEFAULT_CONTACT, props.contactInfo));

    var onSave = () => {
      if (!props.isSaving) {
        emit('save', contact);
      }
    };

    var onDelete = () => emit('delete', contact);

    var renderButtons = () => (0, _vue.createVNode)("div", {
      "class": bem('buttons')
    }, [(0, _vue.createVNode)(_button.Button, {
      "block": true,
      "round": true,
      "type": "danger",
      "text": t('save'),
      "class": bem('button'),
      "loading": props.isSaving,
      "nativeType": "submit"
    }, null), props.isEdit && (0, _vue.createVNode)(_button.Button, {
      "block": true,
      "round": true,
      "text": t('delete'),
      "class": bem('button'),
      "loading": props.isDeleting,
      "onClick": onDelete
    }, null)]);

    var renderSwitch = () => (0, _vue.createVNode)(_switch.Switch, {
      "modelValue": contact.isDefault,
      "onUpdate:modelValue": $event => contact.isDefault = $event,
      "size": 24,
      "onChange": checked => emit('change-default', checked)
    }, null);

    var renderSetDefault = () => {
      if (props.showSetDefault) {
        return (0, _vue.createVNode)(_cell.Cell, {
          "title": props.setDefaultLabel,
          "class": bem('switch-cell'),
          "border": false
        }, {
          'right-icon': renderSwitch
        });
      }
    };

    (0, _vue.watch)(() => props.contactInfo, value => (0, _utils.extend)(contact, DEFAULT_CONTACT, value));
    return () => (0, _vue.createVNode)(_form.Form, {
      "class": bem(),
      "onSubmit": onSave
    }, {
      default: () => [(0, _vue.createVNode)("div", {
        "class": bem('fields')
      }, [(0, _vue.createVNode)(_field.Field, {
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
      }, null), (0, _vue.createVNode)(_field.Field, {
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

exports.default = _default;