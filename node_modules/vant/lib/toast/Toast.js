"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _lockClick = require("./lock-click");

var _icon = require("../icon");

var _popup = require("../popup");

var _loading = require("../loading");

// Utils
// Components
var [name, bem] = (0, _utils.createNamespace)('toast');
var popupInheritProps = ['show', 'overlay', 'transition', 'overlayClass', 'overlayStyle', 'closeOnClickOverlay'];
var toastProps = {
  icon: String,
  show: Boolean,
  type: (0, _utils.makeStringProp)('text'),
  overlay: Boolean,
  message: _utils.numericProp,
  iconSize: _utils.numericProp,
  duration: (0, _utils.makeNumberProp)(2000),
  position: (0, _utils.makeStringProp)('middle'),
  className: _utils.unknownProp,
  iconPrefix: String,
  transition: (0, _utils.makeStringProp)('van-fade'),
  loadingType: String,
  forbidClick: Boolean,
  overlayClass: _utils.unknownProp,
  overlayStyle: Object,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean
};

var _default = (0, _vue.defineComponent)({
  name,
  props: toastProps,
  emits: ['update:show'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var timer;
    var clickable = false;

    var toggleClickable = () => {
      var newValue = props.show && props.forbidClick;

      if (clickable !== newValue) {
        clickable = newValue;
        (0, _lockClick.lockClick)(clickable);
      }
    };

    var updateShow = show => emit('update:show', show);

    var onClick = () => {
      if (props.closeOnClick) {
        updateShow(false);
      }
    };

    var clearTimer = () => clearTimeout(timer);

    var renderIcon = () => {
      var {
        icon,
        type,
        iconSize,
        iconPrefix,
        loadingType
      } = props;
      var hasIcon = icon || type === 'success' || type === 'fail';

      if (hasIcon) {
        return (0, _vue.createVNode)(_icon.Icon, {
          "name": icon || type,
          "size": iconSize,
          "class": bem('icon'),
          "classPrefix": iconPrefix
        }, null);
      }

      if (type === 'loading') {
        return (0, _vue.createVNode)(_loading.Loading, {
          "class": bem('loading'),
          "size": iconSize,
          "type": loadingType
        }, null);
      }
    };

    var renderMessage = () => {
      var {
        type,
        message
      } = props;

      if ((0, _utils.isDef)(message) && message !== '') {
        return type === 'html' ? (0, _vue.createVNode)("div", {
          "class": bem('text'),
          "innerHTML": String(message)
        }, null) : (0, _vue.createVNode)("div", {
          "class": bem('text')
        }, [message]);
      }
    };

    (0, _vue.watch)(() => [props.show, props.forbidClick], toggleClickable);
    (0, _vue.watch)(() => [props.show, props.type, props.message, props.duration], () => {
      clearTimer();

      if (props.show && props.duration > 0) {
        timer = setTimeout(() => {
          updateShow(false);
        }, props.duration);
      }
    });
    (0, _vue.onMounted)(toggleClickable);
    (0, _vue.onUnmounted)(toggleClickable);
    return () => (0, _vue.createVNode)(_popup.Popup, (0, _vue.mergeProps)({
      "class": [bem([props.position, {
        [props.type]: !props.icon
      }]), props.className],
      "lockScroll": false,
      "onClick": onClick,
      "onClosed": clearTimer,
      "onUpdate:show": updateShow
    }, (0, _utils.pick)(props, popupInheritProps)), {
      default: () => [renderIcon(), renderMessage()]
    });
  }

});

exports.default = _default;