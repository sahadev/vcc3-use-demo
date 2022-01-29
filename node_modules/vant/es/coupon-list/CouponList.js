import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import { ref, watch, computed, nextTick, onMounted, defineComponent } from 'vue'; // Utils

import { truthProp, windowHeight, makeArrayProp, makeStringProp, makeNumberProp, createNamespace } from '../utils'; // Composables

import { useRefs } from '../composables/use-refs'; // Components

import { Tab } from '../tab';
import { Tabs } from '../tabs';
import { Field } from '../field';
import { Button } from '../button';
import { Coupon } from '../coupon';
import { useRect } from '@vant/use';
var [name, bem, t] = createNamespace('coupon-list');
var EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';
var couponListProps = {
  code: makeStringProp(''),
  coupons: makeArrayProp(),
  currency: makeStringProp('¥'),
  showCount: truthProp,
  emptyImage: makeStringProp(EMPTY_IMAGE),
  chosenCoupon: makeNumberProp(-1),
  enabledTitle: String,
  disabledTitle: String,
  disabledCoupons: makeArrayProp(),
  showExchangeBar: truthProp,
  showCloseButton: truthProp,
  closeButtonText: String,
  inputPlaceholder: String,
  exchangeMinLength: makeNumberProp(1),
  exchangeButtonText: String,
  displayedCouponIndex: makeNumberProp(-1),
  exchangeButtonLoading: Boolean,
  exchangeButtonDisabled: Boolean
};
export default defineComponent({
  name,
  props: couponListProps,
  emits: ['change', 'exchange', 'update:code'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var [couponRefs, setCouponRefs] = useRefs();
    var root = ref();
    var barRef = ref();
    var activeTab = ref(0);
    var listHeight = ref(0);
    var currentCode = ref(props.code);
    var buttonDisabled = computed(() => !props.exchangeButtonLoading && (props.exchangeButtonDisabled || !currentCode.value || currentCode.value.length < props.exchangeMinLength));

    var updateListHeight = () => {
      var TABS_HEIGHT = 44;
      var rootHeight = useRect(root).height;
      var headerHeight = useRect(barRef).height + TABS_HEIGHT;
      listHeight.value = (rootHeight > headerHeight ? rootHeight : windowHeight.value) - headerHeight;
    };

    var onExchange = () => {
      emit('exchange', currentCode.value); // auto clear currentCode when not use v-model

      if (!props.code) {
        currentCode.value = '';
      }
    };

    var scrollToCoupon = index => {
      nextTick(() => {
        var _couponRefs$value$ind;

        return (_couponRefs$value$ind = couponRefs.value[index]) == null ? void 0 : _couponRefs$value$ind.scrollIntoView();
      });
    };

    var renderEmpty = () => _createVNode("div", {
      "class": bem('empty')
    }, [_createVNode("img", {
      "src": props.emptyImage
    }, null), _createVNode("p", null, [t('noCoupon')])]);

    var renderExchangeBar = () => {
      if (props.showExchangeBar) {
        return _createVNode("div", {
          "ref": barRef,
          "class": bem('exchange-bar')
        }, [_createVNode(Field, {
          "modelValue": currentCode.value,
          "onUpdate:modelValue": $event => currentCode.value = $event,
          "clearable": true,
          "border": false,
          "class": bem('field'),
          "placeholder": props.inputPlaceholder || t('placeholder'),
          "maxlength": "20"
        }, null), _createVNode(Button, {
          "plain": true,
          "type": "danger",
          "class": bem('exchange'),
          "text": props.exchangeButtonText || t('exchange'),
          "loading": props.exchangeButtonLoading,
          "disabled": buttonDisabled.value,
          "onClick": onExchange
        }, null)]);
      }
    };

    var renderCouponTab = () => {
      var _slots$listFooter;

      var {
        coupons
      } = props;
      var count = props.showCount ? " (" + coupons.length + ")" : '';
      var title = (props.enabledTitle || t('enable')) + count;
      return _createVNode(Tab, {
        "title": title
      }, {
        default: () => [_createVNode("div", {
          "class": bem('list', {
            'with-bottom': props.showCloseButton
          }),
          "style": {
            height: listHeight.value + "px"
          }
        }, [coupons.map((coupon, index) => _createVNode(Coupon, {
          "key": coupon.id,
          "ref": setCouponRefs(index),
          "coupon": coupon,
          "chosen": index === props.chosenCoupon,
          "currency": props.currency,
          "onClick": () => emit('change', index)
        }, null)), !coupons.length && renderEmpty(), (_slots$listFooter = slots['list-footer']) == null ? void 0 : _slots$listFooter.call(slots)])]
      });
    };

    var renderDisabledTab = () => {
      var _slots$disabledList;

      var {
        disabledCoupons
      } = props;
      var count = props.showCount ? " (" + disabledCoupons.length + ")" : '';
      var title = (props.disabledTitle || t('disabled')) + count;
      return _createVNode(Tab, {
        "title": title
      }, {
        default: () => [_createVNode("div", {
          "class": bem('list', {
            'with-bottom': props.showCloseButton
          }),
          "style": {
            height: listHeight.value + "px"
          }
        }, [disabledCoupons.map(coupon => _createVNode(Coupon, {
          "disabled": true,
          "key": coupon.id,
          "coupon": coupon,
          "currency": props.currency
        }, null)), !disabledCoupons.length && renderEmpty(), (_slots$disabledList = slots['disabled-list-footer']) == null ? void 0 : _slots$disabledList.call(slots)])]
      });
    };

    watch(() => props.code, value => {
      currentCode.value = value;
    });
    watch(windowHeight, updateListHeight);
    watch(currentCode, value => emit('update:code', value));
    watch(() => props.displayedCouponIndex, scrollToCoupon);
    onMounted(() => {
      updateListHeight();
      scrollToCoupon(props.displayedCouponIndex);
    });
    return () => _createVNode("div", {
      "ref": root,
      "class": bem()
    }, [renderExchangeBar(), _createVNode(Tabs, {
      "active": activeTab.value,
      "onUpdate:active": $event => activeTab.value = $event,
      "class": bem('tab')
    }, {
      default: () => [renderCouponTab(), renderDisabledTab()]
    }), _createVNode("div", {
      "class": bem('bottom')
    }, [_withDirectives(_createVNode(Button, {
      "round": true,
      "block": true,
      "type": "danger",
      "class": bem('close'),
      "text": props.closeButtonText || t('close'),
      "onClick": () => emit('change', -1)
    }, null), [[_vShow, props.showCloseButton]])])]);
  }

});