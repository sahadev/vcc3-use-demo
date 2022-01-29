import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue'; // Utils

import { isDef, numericProp, makeStringProp, createNamespace } from '../utils'; // Components

import { Tag } from '../tag';
import { Image } from '../image';
var [name, bem] = createNamespace('card');
var cardProps = {
  tag: String,
  num: numericProp,
  desc: String,
  thumb: String,
  title: String,
  price: numericProp,
  centered: Boolean,
  lazyLoad: Boolean,
  currency: makeStringProp('¥'),
  thumbLink: String,
  originPrice: numericProp
};
export default defineComponent({
  name,
  props: cardProps,
  emits: ['click-thumb'],

  setup(props, _ref) {
    var {
      slots,
      emit
    } = _ref;

    var renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }

      if (props.title) {
        return _createVNode("div", {
          "class": [bem('title'), 'van-multi-ellipsis--l2']
        }, [props.title]);
      }
    };

    var renderThumbTag = () => {
      if (slots.tag || props.tag) {
        return _createVNode("div", {
          "class": bem('tag')
        }, [slots.tag ? slots.tag() : _createVNode(Tag, {
          "mark": true,
          "type": "danger"
        }, {
          default: () => [props.tag]
        })]);
      }
    };

    var renderThumbImage = () => {
      if (slots.thumb) {
        return slots.thumb();
      }

      return _createVNode(Image, {
        "src": props.thumb,
        "fit": "cover",
        "width": "100%",
        "height": "100%",
        "lazyLoad": props.lazyLoad
      }, null);
    };

    var renderThumb = () => {
      if (slots.thumb || props.thumb) {
        return _createVNode("a", {
          "href": props.thumbLink,
          "class": bem('thumb'),
          "onClick": event => emit('click-thumb', event)
        }, [renderThumbImage(), renderThumbTag()]);
      }
    };

    var renderDesc = () => {
      if (slots.desc) {
        return slots.desc();
      }

      if (props.desc) {
        return _createVNode("div", {
          "class": [bem('desc'), 'van-ellipsis']
        }, [props.desc]);
      }
    };

    var renderPriceText = () => {
      var priceArr = props.price.toString().split('.');
      return _createVNode("div", null, [_createVNode("span", {
        "class": bem('price-currency')
      }, [props.currency]), _createVNode("span", {
        "class": bem('price-integer')
      }, [priceArr[0]]), _createTextVNode("."), _createVNode("span", {
        "class": bem('price-decimal')
      }, [priceArr[1]])]);
    };

    return () => {
      var _slots$priceTop;

      var showNum = slots.num || isDef(props.num);
      var showPrice = slots.price || isDef(props.price);
      var showOriginPrice = slots['origin-price'] || isDef(props.originPrice);
      var showBottom = showNum || showPrice || showOriginPrice || slots.bottom;

      var Price = showPrice && _createVNode("div", {
        "class": bem('price')
      }, [slots.price ? slots.price() : renderPriceText()]);

      var OriginPrice = showOriginPrice && _createVNode("div", {
        "class": bem('origin-price')
      }, [slots['origin-price'] ? slots['origin-price']() : props.currency + " " + props.originPrice]);

      var Num = showNum && _createVNode("div", {
        "class": bem('num')
      }, [slots.num ? slots.num() : "x" + props.num]);

      var Footer = slots.footer && _createVNode("div", {
        "class": bem('footer')
      }, [slots.footer()]);

      var Bottom = showBottom && _createVNode("div", {
        "class": bem('bottom')
      }, [(_slots$priceTop = slots['price-top']) == null ? void 0 : _slots$priceTop.call(slots), Price, OriginPrice, Num, slots.bottom == null ? void 0 : slots.bottom()]);

      return _createVNode("div", {
        "class": bem()
      }, [_createVNode("div", {
        "class": bem('header')
      }, [renderThumb(), _createVNode("div", {
        "class": bem('content', {
          centered: props.centered
        })
      }, [_createVNode("div", null, [renderTitle(), renderDesc(), slots.tags == null ? void 0 : slots.tags()]), Bottom])]), Footer]);
    };
  }

});