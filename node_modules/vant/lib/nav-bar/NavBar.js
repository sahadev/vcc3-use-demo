"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _usePlaceholder = require("../composables/use-placeholder");

var _icon = require("../icon");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('nav-bar');
var navBarProps = {
  title: String,
  fixed: Boolean,
  zIndex: _utils.numericProp,
  border: _utils.truthProp,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  placeholder: Boolean,
  safeAreaInsetTop: Boolean
};

var _default = (0, _vue.defineComponent)({
  name,
  props: navBarProps,
  emits: ['click-left', 'click-right'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var navBarRef = (0, _vue.ref)();
    var renderPlaceholder = (0, _usePlaceholder.usePlaceholder)(navBarRef, bem);

    var onClickLeft = event => emit('click-left', event);

    var onClickRight = event => emit('click-right', event);

    var renderLeft = () => {
      if (slots.left) {
        return slots.left();
      }

      return [props.leftArrow && (0, _vue.createVNode)(_icon.Icon, {
        "class": bem('arrow'),
        "name": "arrow-left"
      }, null), props.leftText && (0, _vue.createVNode)("span", {
        "class": bem('text')
      }, [props.leftText])];
    };

    var renderRight = () => {
      if (slots.right) {
        return slots.right();
      }

      return (0, _vue.createVNode)("span", {
        "class": bem('text')
      }, [props.rightText]);
    };

    var renderNavBar = () => {
      var {
        title,
        fixed,
        border,
        zIndex
      } = props;
      var style = (0, _utils.getZIndexStyle)(zIndex);
      var hasLeft = props.leftArrow || props.leftText || slots.left;
      var hasRight = props.rightText || slots.right;
      return (0, _vue.createVNode)("div", {
        "ref": navBarRef,
        "style": style,
        "class": [bem({
          fixed,
          'safe-area-inset-top': props.safeAreaInsetTop
        }), {
          [_utils.BORDER_BOTTOM]: border
        }]
      }, [(0, _vue.createVNode)("div", {
        "class": bem('content')
      }, [hasLeft && (0, _vue.createVNode)("div", {
        "class": [bem('left'), _utils.HAPTICS_FEEDBACK],
        "onClick": onClickLeft
      }, [renderLeft()]), (0, _vue.createVNode)("div", {
        "class": [bem('title'), 'van-ellipsis']
      }, [slots.title ? slots.title() : title]), hasRight && (0, _vue.createVNode)("div", {
        "class": [bem('right'), _utils.HAPTICS_FEEDBACK],
        "onClick": onClickRight
      }, [renderRight()])])]);
    };

    return () => {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderNavBar);
      }

      return renderNavBar();
    };
  }

});

exports.default = _default;