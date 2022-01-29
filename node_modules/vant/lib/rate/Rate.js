"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useRefs = require("../composables/use-refs");

var _useTouch = require("../composables/use-touch");

var _icon = require("../icon");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('rate');

function getRateStatus(value, index, allowHalf, readonly) {
  if (value >= index) {
    return {
      status: 'full',
      value: 1
    };
  }

  if (value + 0.5 >= index && allowHalf && !readonly) {
    return {
      status: 'half',
      value: 0.5
    };
  }

  if (value + 1 >= index && allowHalf && readonly) {
    var cardinal = Math.pow(10, 10);
    return {
      status: 'half',
      value: Math.round((value - index + 1) * cardinal) / cardinal
    };
  }

  return {
    status: 'void',
    value: 0
  };
}

var rateProps = {
  size: _utils.numericProp,
  icon: (0, _utils.makeStringProp)('star'),
  color: String,
  count: (0, _utils.makeNumericProp)(5),
  gutter: _utils.numericProp,
  readonly: Boolean,
  disabled: Boolean,
  voidIcon: (0, _utils.makeStringProp)('star-o'),
  allowHalf: Boolean,
  voidColor: String,
  touchable: _utils.truthProp,
  iconPrefix: String,
  modelValue: (0, _utils.makeNumberProp)(0),
  disabledColor: String
};

var _default = (0, _vue.defineComponent)({
  name,
  props: rateProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var touch = (0, _useTouch.useTouch)();
    var [itemRefs, setItemRefs] = (0, _useRefs.useRefs)();

    var untouchable = () => props.readonly || props.disabled || !props.touchable;

    var list = (0, _vue.computed)(() => Array(+props.count).fill('').map((_, i) => getRateStatus(props.modelValue, i + 1, props.allowHalf, props.readonly)));
    var ranges;

    var updateRanges = () => {
      var rects = itemRefs.value.map(_use.useRect);
      ranges = [];
      rects.forEach((rect, index) => {
        if (props.allowHalf) {
          ranges.push({
            score: index + 0.5,
            left: rect.left
          }, {
            score: index + 1,
            left: rect.left + rect.width / 2
          });
        } else {
          ranges.push({
            score: index + 1,
            left: rect.left
          });
        }
      });
    };

    var getScoreByPosition = x => {
      for (var i = ranges.length - 1; i > 0; i--) {
        if (x > ranges[i].left) {
          return ranges[i].score;
        }
      }

      return props.allowHalf ? 0.5 : 1;
    };

    var select = index => {
      if (!props.disabled && !props.readonly && index !== props.modelValue) {
        emit('update:modelValue', index);
        emit('change', index);
      }
    };

    var onTouchStart = event => {
      if (untouchable()) {
        return;
      }

      touch.start(event);
      updateRanges();
    };

    var onTouchMove = event => {
      if (untouchable()) {
        return;
      }

      touch.move(event);

      if (touch.isHorizontal()) {
        var {
          clientX
        } = event.touches[0];
        (0, _utils.preventDefault)(event);
        select(getScoreByPosition(clientX));
      }
    };

    var renderStar = (item, index) => {
      var {
        icon,
        size,
        color,
        count,
        gutter,
        voidIcon,
        disabled,
        voidColor,
        allowHalf,
        iconPrefix,
        disabledColor
      } = props;
      var score = index + 1;
      var isFull = item.status === 'full';
      var isVoid = item.status === 'void';
      var renderHalf = allowHalf && item.value > 0 && item.value < 1;
      var style;

      if (gutter && score !== +count) {
        style = {
          paddingRight: (0, _utils.addUnit)(gutter)
        };
      }

      var onClickItem = event => {
        updateRanges();
        select(allowHalf ? getScoreByPosition(event.clientX) : score);
      };

      return (0, _vue.createVNode)("div", {
        "key": index,
        "ref": setItemRefs(index),
        "role": "radio",
        "style": style,
        "class": bem('item'),
        "tabindex": disabled ? undefined : 0,
        "aria-setsize": count,
        "aria-posinset": score,
        "aria-checked": !isVoid,
        "onClick": onClickItem
      }, [(0, _vue.createVNode)(_icon.Icon, {
        "size": size,
        "name": isFull ? icon : voidIcon,
        "class": bem('icon', {
          disabled,
          full: isFull
        }),
        "color": disabled ? disabledColor : isFull ? color : voidColor,
        "classPrefix": iconPrefix
      }, null), renderHalf && (0, _vue.createVNode)(_icon.Icon, {
        "size": size,
        "style": {
          width: item.value + 'em'
        },
        "name": isVoid ? voidIcon : icon,
        "class": bem('icon', ['half', {
          disabled,
          full: !isVoid
        }]),
        "color": disabled ? disabledColor : isVoid ? voidColor : color,
        "classPrefix": iconPrefix
      }, null)]);
    };

    (0, _use.useCustomFieldValue)(() => props.modelValue);
    return () => (0, _vue.createVNode)("div", {
      "role": "radiogroup",
      "class": bem({
        readonly: props.readonly,
        disabled: props.disabled
      }),
      "tabindex": props.disabled ? undefined : 0,
      "aria-disabled": props.disabled,
      "aria-readonly": props.readonly,
      "onTouchstart": onTouchStart,
      "onTouchmove": onTouchMove
    }, [list.value.map(renderStar)]);
  }

});

exports.default = _default;