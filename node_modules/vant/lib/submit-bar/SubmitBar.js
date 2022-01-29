"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _icon = require("../icon");

var _button = require("../button");

// Components
var [name, bem, t] = (0, _utils.createNamespace)('submit-bar');
var submitBarProps = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  currency: (0, _utils.makeStringProp)('¥'),
  disabled: Boolean,
  textAlign: String,
  buttonText: String,
  buttonType: (0, _utils.makeStringProp)('danger'),
  buttonColor: String,
  suffixLabel: String,
  decimalLength: (0, _utils.makeNumericProp)(2),
  safeAreaInsetBottom: _utils.truthProp
};

var _default = (0, _vue.defineComponent)({
  name,
  props: submitBarProps,
  emits: ['submit'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;

    var renderText = () => {
      var {
        price,
        label,
        currency,
        textAlign,
        suffixLabel,
        decimalLength
      } = props;

      if (typeof price === 'number') {
        var pricePair = (price / 100).toFixed(+decimalLength).split('.');
        var decimal = decimalLength ? "." + pricePair[1] : '';
        return (0, _vue.createVNode)("div", {
          "class": bem('text'),
          "style": {
            textAlign
          }
        }, [(0, _vue.createVNode)("span", null, [label || t('label')]), (0, _vue.createVNode)("span", {
          "class": bem('price')
        }, [currency, (0, _vue.createVNode)("span", {
          "class": bem('price-integer')
        }, [pricePair[0]]), decimal]), suffixLabel && (0, _vue.createVNode)("span", {
          "class": bem('suffix-label')
        }, [suffixLabel])]);
      }
    };

    var renderTip = () => {
      var {
        tip,
        tipIcon
      } = props;

      if (slots.tip || tip) {
        return (0, _vue.createVNode)("div", {
          "class": bem('tip')
        }, [tipIcon && (0, _vue.createVNode)(_icon.Icon, {
          "class": bem('tip-icon'),
          "name": tipIcon
        }, null), tip && (0, _vue.createVNode)("span", {
          "class": bem('tip-text')
        }, [tip]), slots.tip == null ? void 0 : slots.tip()]);
      }
    };

    var onClickButton = () => emit('submit');

    var renderButton = () => {
      if (slots.button) {
        return slots.button();
      }

      return (0, _vue.createVNode)(_button.Button, {
        "round": true,
        "type": props.buttonType,
        "text": props.buttonText,
        "class": bem('button', props.buttonType),
        "color": props.buttonColor,
        "loading": props.loading,
        "disabled": props.disabled,
        "onClick": onClickButton
      }, null);
    };

    return () => (0, _vue.createVNode)("div", {
      "class": [bem(), {
        'van-safe-area-bottom': props.safeAreaInsetBottom
      }]
    }, [slots.top == null ? void 0 : slots.top(), renderTip(), (0, _vue.createVNode)("div", {
      "class": bem('bar')
    }, [slots.default == null ? void 0 : slots.default(), renderText(), renderButton()])]);
  }

});

exports.default = _default;