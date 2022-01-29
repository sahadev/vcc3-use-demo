"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _NumberKeyboardKey = _interopRequireDefault(require("./NumberKeyboardKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('number-keyboard');
var numberKeyboardProps = {
  show: Boolean,
  title: String,
  theme: (0, _utils.makeStringProp)('default'),
  zIndex: _utils.numericProp,
  teleport: [String, Object],
  maxlength: (0, _utils.makeNumericProp)(Infinity),
  modelValue: (0, _utils.makeStringProp)(''),
  transition: _utils.truthProp,
  blurOnClose: _utils.truthProp,
  showDeleteKey: _utils.truthProp,
  randomKeyOrder: Boolean,
  closeButtonText: String,
  deleteButtonText: String,
  closeButtonLoading: Boolean,
  hideOnClickOutside: _utils.truthProp,
  safeAreaInsetBottom: _utils.truthProp,
  extraKey: {
    type: [String, Array],
    default: ''
  }
};

var _default = (0, _vue.defineComponent)({
  name,
  props: numberKeyboardProps,
  emits: ['show', 'hide', 'blur', 'input', 'close', 'delete', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var root = (0, _vue.ref)();

    var genBasicKeys = () => {
      var keys = Array(9).fill('').map((_, i) => ({
        text: i + 1
      }));

      if (props.randomKeyOrder) {
        keys.sort(() => Math.random() > 0.5 ? 1 : -1);
      }

      return keys;
    };

    var genDefaultKeys = () => [...genBasicKeys(), {
      text: props.extraKey,
      type: 'extra'
    }, {
      text: 0
    }, {
      text: props.showDeleteKey ? props.deleteButtonText : '',
      type: props.showDeleteKey ? 'delete' : ''
    }];

    var genCustomKeys = () => {
      var keys = genBasicKeys();
      var {
        extraKey
      } = props;
      var extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];

      if (extraKeys.length === 1) {
        keys.push({
          text: 0,
          wider: true
        }, {
          text: extraKeys[0],
          type: 'extra'
        });
      } else if (extraKeys.length === 2) {
        keys.push({
          text: extraKeys[0],
          type: 'extra'
        }, {
          text: 0
        }, {
          text: extraKeys[1],
          type: 'extra'
        });
      }

      return keys;
    };

    var keys = (0, _vue.computed)(() => props.theme === 'custom' ? genCustomKeys() : genDefaultKeys());

    var onBlur = () => {
      if (props.show) {
        emit('blur');
      }
    };

    var onClose = () => {
      emit('close');

      if (props.blurOnClose) {
        onBlur();
      }
    };

    var onAnimationEnd = () => emit(props.show ? 'show' : 'hide');

    var onPress = (text, type) => {
      if (text === '') {
        if (type === 'extra') {
          onBlur();
        }

        return;
      }

      var value = props.modelValue;

      if (type === 'delete') {
        emit('delete');
        emit('update:modelValue', value.slice(0, value.length - 1));
      } else if (type === 'close') {
        onClose();
      } else if (value.length < props.maxlength) {
        emit('input', text);
        emit('update:modelValue', value + text);
      }
    };

    var renderTitle = () => {
      var {
        title,
        theme,
        closeButtonText
      } = props;
      var leftSlot = slots['title-left'];
      var showClose = closeButtonText && theme === 'default';
      var showTitle = title || showClose || leftSlot;

      if (!showTitle) {
        return;
      }

      return (0, _vue.createVNode)("div", {
        "class": bem('header')
      }, [leftSlot && (0, _vue.createVNode)("span", {
        "class": bem('title-left')
      }, [leftSlot()]), title && (0, _vue.createVNode)("h2", {
        "class": bem('title')
      }, [title]), showClose && (0, _vue.createVNode)("button", {
        "type": "button",
        "class": [bem('close'), _utils.HAPTICS_FEEDBACK],
        "onClick": onClose
      }, [closeButtonText])]);
    };

    var renderKeys = () => keys.value.map(key => {
      var keySlots = {};

      if (key.type === 'delete') {
        keySlots.default = slots.delete;
      }

      if (key.type === 'extra') {
        keySlots.default = slots['extra-key'];
      }

      return (0, _vue.createVNode)(_NumberKeyboardKey.default, {
        "key": key.text,
        "text": key.text,
        "type": key.type,
        "wider": key.wider,
        "color": key.color,
        "onPress": onPress
      }, keySlots);
    });

    var renderSidebar = () => {
      if (props.theme === 'custom') {
        return (0, _vue.createVNode)("div", {
          "class": bem('sidebar')
        }, [props.showDeleteKey && (0, _vue.createVNode)(_NumberKeyboardKey.default, {
          "large": true,
          "text": props.deleteButtonText,
          "type": "delete",
          "onPress": onPress
        }, {
          delete: slots.delete
        }), (0, _vue.createVNode)(_NumberKeyboardKey.default, {
          "large": true,
          "text": props.closeButtonText,
          "type": "close",
          "color": "blue",
          "loading": props.closeButtonLoading,
          "onPress": onPress
        }, null)]);
      }
    };

    (0, _vue.watch)(() => props.show, value => {
      if (!props.transition) {
        emit(value ? 'show' : 'hide');
      }
    });

    if (props.hideOnClickOutside) {
      (0, _use.useClickAway)(root, onBlur, {
        eventName: 'touchstart'
      });
    }

    return () => {
      var Title = renderTitle();
      var Content = (0, _vue.createVNode)(_vue.Transition, {
        "name": props.transition ? 'van-slide-up' : ''
      }, {
        default: () => [(0, _vue.withDirectives)((0, _vue.createVNode)("div", {
          "ref": root,
          "style": (0, _utils.getZIndexStyle)(props.zIndex),
          "class": bem({
            unfit: !props.safeAreaInsetBottom,
            'with-title': !!Title
          }),
          "onTouchstart": _utils.stopPropagation,
          "onAnimationend": onAnimationEnd,
          "onWebkitAnimationEnd": onAnimationEnd
        }, [Title, (0, _vue.createVNode)("div", {
          "class": bem('body')
        }, [(0, _vue.createVNode)("div", {
          "class": bem('keys')
        }, [renderKeys()]), renderSidebar()])]), [[_vue.vShow, props.show]])]
      });

      if (props.teleport) {
        return (0, _vue.createVNode)(_vue.Teleport, {
          "to": props.teleport
        }, {
          default: () => [Content]
        });
      }

      return Content;
    };
  }

});

exports.default = _default;