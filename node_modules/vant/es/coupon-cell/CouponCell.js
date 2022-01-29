import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue'; // Utils

import { isDef, truthProp, makeArrayProp, makeStringProp, makeNumericProp, createNamespace } from '../utils'; // Components

import { Cell } from '../cell'; // Types

var [name, bem, t] = createNamespace('coupon-cell');
var couponCellProps = {
  title: String,
  border: truthProp,
  editable: truthProp,
  coupons: makeArrayProp(),
  currency: makeStringProp('¥'),
  chosenCoupon: makeNumericProp(-1)
};

function formatValue(_ref) {
  var {
    coupons,
    chosenCoupon,
    currency
  } = _ref;
  var coupon = coupons[+chosenCoupon];

  if (coupon) {
    var value = 0;

    if (isDef(coupon.value)) {
      ({
        value
      } = coupon);
    } else if (isDef(coupon.denominations)) {
      value = coupon.denominations;
    }

    return "-" + currency + " " + (value / 100).toFixed(2);
  }

  return coupons.length === 0 ? t('noCoupon') : t('count', coupons.length);
}

export default defineComponent({
  name,
  props: couponCellProps,

  setup(props) {
    return () => {
      var selected = props.coupons[+props.chosenCoupon];
      return _createVNode(Cell, {
        "class": bem(),
        "value": formatValue(props),
        "title": props.title || t('title'),
        "border": props.border,
        "isLink": props.editable,
        "valueClass": bem('value', {
          selected
        })
      }, null);
    };
  }

});