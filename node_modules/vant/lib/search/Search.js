"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _Field = require("../field/Field");

var _useId = require("../composables/use-id");

var _useExpose = require("../composables/use-expose");

var _field = require("../field");

// Utils
// Composables
// Components
var [name, bem, t] = (0, _utils.createNamespace)('search');
var searchProps = (0, _utils.extend)({}, _Field.fieldSharedProps, {
  label: String,
  shape: (0, _utils.makeStringProp)('square'),
  leftIcon: (0, _utils.makeStringProp)('search'),
  clearable: _utils.truthProp,
  actionText: String,
  background: String,
  showAction: Boolean
});

var _default = (0, _vue.defineComponent)({
  name,
  props: searchProps,
  emits: ['search', 'cancel', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots,
      attrs
    } = _ref;
    var id = (0, _useId.useId)();
    var filedRef = (0, _vue.ref)();

    var onCancel = () => {
      if (!slots.action) {
        emit('update:modelValue', '');
        emit('cancel');
      }
    };

    var onKeypress = event => {
      var ENTER_CODE = 13;

      if (event.keyCode === ENTER_CODE) {
        (0, _utils.preventDefault)(event);
        emit('search', props.modelValue);
      }
    };

    var getInputId = () => props.id || id + "-input";

    var renderLabel = () => {
      if (slots.label || props.label) {
        return (0, _vue.createVNode)("label", {
          "class": bem('label'),
          "for": getInputId()
        }, [slots.label ? slots.label() : props.label]);
      }
    };

    var renderAction = () => {
      if (props.showAction) {
        var text = props.actionText || t('cancel');
        return (0, _vue.createVNode)("div", {
          "class": bem('action'),
          "role": "button",
          "tabindex": 0,
          "onClick": onCancel
        }, [slots.action ? slots.action() : text]);
      }
    };

    var blur = () => {
      var _filedRef$value;

      return (_filedRef$value = filedRef.value) == null ? void 0 : _filedRef$value.blur();
    };

    var focus = () => {
      var _filedRef$value2;

      return (_filedRef$value2 = filedRef.value) == null ? void 0 : _filedRef$value2.focus();
    };

    var fieldPropNames = Object.keys(_Field.fieldSharedProps);

    var renderField = () => {
      var fieldAttrs = (0, _utils.extend)({}, attrs, (0, _utils.pick)(props, fieldPropNames), {
        id: getInputId()
      });

      var onInput = value => emit('update:modelValue', value);

      return (0, _vue.createVNode)(_field.Field, (0, _vue.mergeProps)({
        "ref": filedRef,
        "type": "search",
        "class": bem('field'),
        "border": false,
        "onKeypress": onKeypress,
        "onUpdate:modelValue": onInput
      }, fieldAttrs), (0, _utils.pick)(slots, ['left-icon', 'right-icon']));
    };

    (0, _useExpose.useExpose)({
      focus,
      blur
    });
    return () => (0, _vue.createVNode)("div", {
      "class": bem({
        'show-action': props.showAction
      }),
      "style": {
        background: props.background
      }
    }, [slots.left == null ? void 0 : slots.left(), (0, _vue.createVNode)("div", {
      "class": bem('content', props.shape)
    }, [renderLabel(), renderField()]), renderAction()]);
  }

});

exports.default = _default;