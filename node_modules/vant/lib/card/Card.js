"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _tag = require("../tag");

var _image = require("../image");

// Utils
// Components
var [name, bem] = (0, _utils.createNamespace)('card');
var cardProps = {
  tag: String,
  num: _utils.numericProp,
  desc: String,
  thumb: String,
  title: String,
  price: _utils.numericProp,
  centered: Boolean,
  lazyLoad: Boolean,
  currency: (0, _utils.makeStringProp)('¥'),
  thumbLink: String,
  originPrice: _utils.numericProp
};

var _default = (0, _vue.defineComponent)({
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
        return (0, _vue.createVNode)("div", {
          "class": [bem('title'), 'van-multi-ellipsis--l2']
        }, [props.title]);
      }
    };

    var renderThumbTag = () => {
      if (slots.tag || props.tag) {
        return (0, _vue.createVNode)("div", {
          "class": bem('tag')
        }, [slots.tag ? slots.tag() : (0, _vue.createVNode)(_tag.Tag, {
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

      return (0, _vue.createVNode)(_image.Image, {
        "src": props.thumb,
        "fit": "cover",
        "width": "100%",
        "height": "100%",
        "lazyLoad": props.lazyLoad
      }, null);
    };

    var renderThumb = () => {
      if (slots.thumb || props.thumb) {
        return (0, _vue.createVNode)("a", {
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
        return (0, _vue.createVNode)("div", {
          "class": [bem('desc'), 'van-ellipsis']
        }, [props.desc]);
      }
    };

    var renderPriceText = () => {
      var priceArr = props.price.toString().split('.');
      return (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("span", {
        "class": bem('price-currency')
      }, [props.currency]), (0, _vue.createVNode)("span", {
        "class": bem('price-integer')
      }, [priceArr[0]]), (0, _vue.createTextVNode)("."), (0, _vue.createVNode)("span", {
        "class": bem('price-decimal')
      }, [priceArr[1]])]);
    };

    return () => {
      var _slots$priceTop;

      var showNum = slots.num || (0, _utils.isDef)(props.num);
      var showPrice = slots.price || (0, _utils.isDef)(props.price);
      var showOriginPrice = slots['origin-price'] || (0, _utils.isDef)(props.originPrice);
      var showBottom = showNum || showPrice || showOriginPrice || slots.bottom;
      var Price = showPrice && (0, _vue.createVNode)("div", {
        "class": bem('price')
      }, [slots.price ? slots.price() : renderPriceText()]);
      var OriginPrice = showOriginPrice && (0, _vue.createVNode)("div", {
        "class": bem('origin-price')
      }, [slots['origin-price'] ? slots['origin-price']() : props.currency + " " + props.originPrice]);
      var Num = showNum && (0, _vue.createVNode)("div", {
        "class": bem('num')
      }, [slots.num ? slots.num() : "x" + props.num]);
      var Footer = slots.footer && (0, _vue.createVNode)("div", {
        "class": bem('footer')
      }, [slots.footer()]);
      var Bottom = showBottom && (0, _vue.createVNode)("div", {
        "class": bem('bottom')
      }, [(_slots$priceTop = slots['price-top']) == null ? void 0 : _slots$priceTop.call(slots), Price, OriginPrice, Num, slots.bottom == null ? void 0 : slots.bottom()]);
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [(0, _vue.createVNode)("div", {
        "class": bem('header')
      }, [renderThumb(), (0, _vue.createVNode)("div", {
        "class": bem('content', {
          centered: props.centered
        })
      }, [(0, _vue.createVNode)("div", null, [renderTitle(), renderDesc(), slots.tags == null ? void 0 : slots.tags()]), Bottom])]), Footer]);
    };
  }

});

exports.default = _default;