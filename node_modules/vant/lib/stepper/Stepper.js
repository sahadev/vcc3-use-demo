"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('stepper');
var LONG_PRESS_INTERVAL = 200;
var LONG_PRESS_START_TIME = 600;

var isEqual = (value1, value2) => String(value1) === String(value2);

var stepperProps = {
  min: (0, _utils.makeNumericProp)(1),
  max: (0, _utils.makeNumericProp)(Infinity),
  name: (0, _utils.makeNumericProp)(''),
  step: (0, _utils.makeNumericProp)(1),
  theme: String,
  integer: Boolean,
  disabled: Boolean,
  showPlus: _utils.truthProp,
  showMinus: _utils.truthProp,
  showInput: _utils.truthProp,
  longPress: _utils.truthProp,
  allowEmpty: Boolean,
  modelValue: _utils.numericProp,
  inputWidth: _utils.numericProp,
  buttonSize: _utils.numericProp,
  placeholder: String,
  disablePlus: Boolean,
  disableMinus: Boolean,
  disableInput: Boolean,
  beforeChange: Function,
  defaultValue: (0, _utils.makeNumericProp)(1),
  decimalLength: _utils.numericProp
};

var _default = (0, _vue.defineComponent)({
  name,
  props: stepperProps,
  emits: ['plus', 'blur', 'minus', 'focus', 'change', 'overlimit', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;

    var format = value => {
      var {
        min,
        max,
        allowEmpty,
        decimalLength
      } = props;

      if (allowEmpty && value === '') {
        return value;
      }

      value = (0, _utils.formatNumber)(String(value), !props.integer);
      value = value === '' ? 0 : +value;
      value = Number.isNaN(value) ? +min : value;
      value = Math.max(Math.min(+max, value), +min); // format decimal

      if ((0, _utils.isDef)(decimalLength)) {
        value = value.toFixed(+decimalLength);
      }

      return value;
    };

    var getInitialValue = () => {
      var _props$modelValue;

      var defaultValue = (_props$modelValue = props.modelValue) != null ? _props$modelValue : props.defaultValue;
      var value = format(defaultValue);

      if (!isEqual(value, props.modelValue)) {
        emit('update:modelValue', value);
      }

      return value;
    };

    var actionType;
    var inputRef = (0, _vue.ref)();
    var current = (0, _vue.ref)(getInitialValue());
    var minusDisabled = (0, _vue.computed)(() => props.disabled || props.disableMinus || current.value <= +props.min);
    var plusDisabled = (0, _vue.computed)(() => props.disabled || props.disablePlus || current.value >= +props.max);
    var inputStyle = (0, _vue.computed)(() => ({
      width: (0, _utils.addUnit)(props.inputWidth),
      height: (0, _utils.addUnit)(props.buttonSize)
    }));
    var buttonStyle = (0, _vue.computed)(() => (0, _utils.getSizeStyle)(props.buttonSize));

    var check = () => {
      var value = format(current.value);

      if (!isEqual(value, current.value)) {
        current.value = value;
      }
    };

    var setValue = value => {
      if (props.beforeChange) {
        (0, _utils.callInterceptor)(props.beforeChange, {
          args: [value],

          done() {
            current.value = value;
          }

        });
      } else {
        current.value = value;
      }
    };

    var onChange = () => {
      if (actionType === 'plus' && plusDisabled.value || actionType === 'minus' && minusDisabled.value) {
        emit('overlimit', actionType);
        return;
      }

      var diff = actionType === 'minus' ? -props.step : +props.step;
      var value = format((0, _utils.addNumber)(+current.value, diff));
      setValue(value);
      emit(actionType);
    };

    var onInput = event => {
      var input = event.target;
      var {
        value
      } = input;
      var {
        decimalLength
      } = props;
      var formatted = (0, _utils.formatNumber)(String(value), !props.integer); // limit max decimal length

      if ((0, _utils.isDef)(decimalLength) && formatted.includes('.')) {
        var pair = formatted.split('.');
        formatted = pair[0] + "." + pair[1].slice(0, +decimalLength);
      }

      if (props.beforeChange) {
        input.value = String(current.value);
      } else if (!isEqual(value, formatted)) {
        input.value = formatted;
      } // prefer number type


      var isNumeric = formatted === String(+formatted);
      setValue(isNumeric ? +formatted : formatted);
    };

    var onFocus = event => {
      // readonly not work in legacy mobile safari
      if (props.disableInput) {
        var _inputRef$value;

        (_inputRef$value = inputRef.value) == null ? void 0 : _inputRef$value.blur();
      } else {
        emit('focus', event);
      }
    };

    var onBlur = event => {
      var input = event.target;
      var value = format(input.value);
      input.value = String(value);
      current.value = value;
      (0, _vue.nextTick)(() => {
        emit('blur', event);
        (0, _utils.resetScroll)();
      });
    };

    var isLongPress;
    var longPressTimer;

    var longPressStep = () => {
      longPressTimer = setTimeout(() => {
        onChange();
        longPressStep();
      }, LONG_PRESS_INTERVAL);
    };

    var onTouchStart = () => {
      if (props.longPress) {
        isLongPress = false;
        clearTimeout(longPressTimer);
        longPressTimer = setTimeout(() => {
          isLongPress = true;
          onChange();
          longPressStep();
        }, LONG_PRESS_START_TIME);
      }
    };

    var onTouchEnd = event => {
      if (props.longPress) {
        clearTimeout(longPressTimer);

        if (isLongPress) {
          (0, _utils.preventDefault)(event);
        }
      }
    };

    var onMousedown = event => {
      // fix mobile safari page scroll down issue
      // see: https://github.com/youzan/vant/issues/7690
      if (props.disableInput) {
        (0, _utils.preventDefault)(event);
      }
    };

    var createListeners = type => ({
      onClick: event => {
        // disable double tap scrolling on mobile safari
        (0, _utils.preventDefault)(event);
        actionType = type;
        onChange();
      },
      onTouchstart: () => {
        actionType = type;
        onTouchStart();
      },
      onTouchend: onTouchEnd,
      onTouchcancel: onTouchEnd
    });

    (0, _vue.watch)(() => [props.max, props.min, props.integer, props.decimalLength], check);
    (0, _vue.watch)(() => props.modelValue, value => {
      if (!isEqual(value, current.value)) {
        current.value = format(value);
      }
    });
    (0, _vue.watch)(current, value => {
      emit('update:modelValue', value);
      emit('change', value, {
        name: props.name
      });
    });
    (0, _use.useCustomFieldValue)(() => props.modelValue);
    return () => (0, _vue.createVNode)("div", {
      "role": "group",
      "class": bem([props.theme])
    }, [(0, _vue.withDirectives)((0, _vue.createVNode)("button", (0, _vue.mergeProps)({
      "type": "button",
      "style": buttonStyle.value,
      "class": [bem('minus', {
        disabled: minusDisabled.value
      }), {
        [_utils.HAPTICS_FEEDBACK]: !minusDisabled.value
      }],
      "aria-disabled": minusDisabled.value || undefined
    }, createListeners('minus')), null), [[_vue.vShow, props.showMinus]]), (0, _vue.withDirectives)((0, _vue.createVNode)("input", {
      "ref": inputRef,
      "type": props.integer ? 'tel' : 'text',
      "role": "spinbutton",
      "class": bem('input'),
      "value": current.value,
      "style": inputStyle.value,
      "disabled": props.disabled,
      "readonly": props.disableInput,
      "inputmode": props.integer ? 'numeric' : 'decimal',
      "placeholder": props.placeholder,
      "aria-valuemax": props.max,
      "aria-valuemin": props.min,
      "aria-valuenow": current.value,
      "onBlur": onBlur,
      "onInput": onInput,
      "onFocus": onFocus,
      "onMousedown": onMousedown
    }, null), [[_vue.vShow, props.showInput]]), (0, _vue.withDirectives)((0, _vue.createVNode)("button", (0, _vue.mergeProps)({
      "type": "button",
      "style": buttonStyle.value,
      "class": [bem('plus', {
        disabled: plusDisabled.value
      }), {
        [_utils.HAPTICS_FEEDBACK]: !plusDisabled.value
      }],
      "aria-disabled": plusDisabled.value || undefined
    }, createListeners('plus')), null), [[_vue.vShow, props.showPlus]])]);
  }

});

exports.default = _default;