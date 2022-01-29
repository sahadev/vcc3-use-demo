import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { truthProp, makeStringProp, makeNumericProp, createNamespace } from '../utils'; // Components

import { Icon } from '../icon';
import { Button } from '../button';
var [name, bem, t] = createNamespace('submit-bar');
var submitBarProps = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  currency: makeStringProp('¥'),
  disabled: Boolean,
  textAlign: String,
  buttonText: String,
  buttonType: makeStringProp('danger'),
  buttonColor: String,
  suffixLabel: String,
  decimalLength: makeNumericProp(2),
  safeAreaInsetBottom: truthProp
};
export default defineComponent({
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
        return _createVNode("div", {
          "class": bem('text'),
          "style": {
            textAlign
          }
        }, [_createVNode("span", null, [label || t('label')]), _createVNode("span", {
          "class": bem('price')
        }, [currency, _createVNode("span", {
          "class": bem('price-integer')
        }, [pricePair[0]]), decimal]), suffixLabel && _createVNode("span", {
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
        return _createVNode("div", {
          "class": bem('tip')
        }, [tipIcon && _createVNode(Icon, {
          "class": bem('tip-icon'),
          "name": tipIcon
        }, null), tip && _createVNode("span", {
          "class": bem('tip-text')
        }, [tip]), slots.tip == null ? void 0 : slots.tip()]);
      }
    };

    var onClickButton = () => emit('submit');

    var renderButton = () => {
      if (slots.button) {
        return slots.button();
      }

      return _createVNode(Button, {
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

    return () => _createVNode("div", {
      "class": [bem(), {
        'van-safe-area-bottom': props.safeAreaInsetBottom
      }]
    }, [slots.top == null ? void 0 : slots.top(), renderTip(), _createVNode("div", {
      "class": bem('bar')
    }, [slots.default == null ? void 0 : slots.default(), renderText(), renderButton()])]);
  }

});