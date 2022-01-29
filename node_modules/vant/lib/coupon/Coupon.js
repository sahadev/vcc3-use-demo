"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _checkbox = require("../checkbox");

var [name, bem, t] = (0, _utils.createNamespace)('coupon');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    chosen: Boolean,
    coupon: (0, _utils.makeRequiredProp)(Object),
    disabled: Boolean,
    currency: (0, _utils.makeStringProp)('¥')
  },

  setup(props) {
    var validPeriod = (0, _vue.computed)(() => {
      var {
        startAt,
        endAt
      } = props.coupon;
      return (0, _utils2.getDate)(startAt) + " - " + (0, _utils2.getDate)(endAt);
    });
    var faceAmount = (0, _vue.computed)(() => {
      var {
        coupon,
        currency
      } = props;

      if (coupon.valueDesc) {
        return [coupon.valueDesc, (0, _vue.createVNode)("span", null, [coupon.unitDesc || ''])];
      }

      if (coupon.denominations) {
        var denominations = (0, _utils2.formatAmount)(coupon.denominations);
        return [(0, _vue.createVNode)("span", null, [currency]), " " + denominations];
      }

      if (coupon.discount) {
        return t('discount', (0, _utils2.formatDiscount)(coupon.discount));
      }

      return '';
    });
    var conditionMessage = (0, _vue.computed)(() => {
      var condition = (0, _utils2.formatAmount)(props.coupon.originCondition || 0);
      return condition === '0' ? t('unlimited') : t('condition', condition);
    });
    return () => {
      var {
        chosen,
        coupon,
        disabled
      } = props;
      var description = disabled && coupon.reason || coupon.description;
      return (0, _vue.createVNode)("div", {
        "class": bem({
          disabled
        })
      }, [(0, _vue.createVNode)("div", {
        "class": bem('content')
      }, [(0, _vue.createVNode)("div", {
        "class": bem('head')
      }, [(0, _vue.createVNode)("h2", {
        "class": bem('amount')
      }, [faceAmount.value]), (0, _vue.createVNode)("p", {
        "class": bem('condition')
      }, [coupon.condition || conditionMessage.value])]), (0, _vue.createVNode)("div", {
        "class": bem('body')
      }, [(0, _vue.createVNode)("p", {
        "class": bem('name')
      }, [coupon.name]), (0, _vue.createVNode)("p", {
        "class": bem('valid')
      }, [validPeriod.value]), !disabled && (0, _vue.createVNode)(_checkbox.Checkbox, {
        "class": bem('corner'),
        "modelValue": chosen
      }, null)])]), description && (0, _vue.createVNode)("p", {
        "class": bem('description')
      }, [description])]);
    };
  }

});

exports.default = _default;