"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _shared = require("../popup/shared");

var _popup = require("../popup");

// Utils
// Components
var PRESET_ICONS = ['qq', 'link', 'weibo', 'wechat', 'poster', 'qrcode', 'weapp-qrcode', 'wechat-moments'];
var popupInheritKeys = [..._shared.popupSharedPropKeys, 'round', 'closeOnPopstate', 'safeAreaInsetBottom'];

function getIconURL(icon) {
  if (PRESET_ICONS.includes(icon)) {
    return "https://img.yzcdn.cn/vant/share-sheet-" + icon + ".png";
  }

  return icon;
}

var [name, bem, t] = (0, _utils.createNamespace)('share-sheet');
var shareSheetProps = (0, _utils.extend)({}, _shared.popupSharedProps, {
  title: String,
  round: _utils.truthProp,
  options: (0, _utils.makeArrayProp)(),
  cancelText: String,
  description: String,
  closeOnPopstate: _utils.truthProp,
  safeAreaInsetBottom: _utils.truthProp
});

var _default = (0, _vue.defineComponent)({
  name,
  props: shareSheetProps,
  emits: ['cancel', 'select', 'update:show'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;

    var updateShow = value => emit('update:show', value);

    var onCancel = () => {
      updateShow(false);
      emit('cancel');
    };

    var onSelect = (option, index) => emit('select', option, index);

    var renderHeader = () => {
      var title = slots.title ? slots.title() : props.title;
      var description = slots.description ? slots.description() : props.description;

      if (title || description) {
        return (0, _vue.createVNode)("div", {
          "class": bem('header')
        }, [title && (0, _vue.createVNode)("h2", {
          "class": bem('title')
        }, [title]), description && (0, _vue.createVNode)("span", {
          "class": bem('description')
        }, [description])]);
      }
    };

    var renderOption = (option, index) => {
      var {
        name,
        icon,
        className,
        description
      } = option;
      return (0, _vue.createVNode)("div", {
        "role": "button",
        "tabindex": 0,
        "class": [bem('option'), className, _utils.HAPTICS_FEEDBACK],
        "onClick": () => onSelect(option, index)
      }, [(0, _vue.createVNode)("img", {
        "src": getIconURL(icon),
        "class": bem('icon')
      }, null), name && (0, _vue.createVNode)("span", {
        "class": bem('name')
      }, [name]), description && (0, _vue.createVNode)("span", {
        "class": bem('option-description')
      }, [description])]);
    };

    var renderOptions = (options, border) => (0, _vue.createVNode)("div", {
      "class": bem('options', {
        border
      })
    }, [options.map(renderOption)]);

    var renderRows = () => {
      var {
        options
      } = props;

      if (Array.isArray(options[0])) {
        return options.map((item, index) => renderOptions(item, index !== 0));
      }

      return renderOptions(options);
    };

    var renderCancelButton = () => {
      var _props$cancelText;

      var cancelText = (_props$cancelText = props.cancelText) != null ? _props$cancelText : t('cancel');

      if (slots.cancel || cancelText) {
        return (0, _vue.createVNode)("button", {
          "type": "button",
          "class": bem('cancel'),
          "onClick": onCancel
        }, [slots.cancel ? slots.cancel() : cancelText]);
      }
    };

    return () => (0, _vue.createVNode)(_popup.Popup, (0, _vue.mergeProps)({
      "class": bem(),
      "position": "bottom",
      "onUpdate:show": updateShow
    }, (0, _utils.pick)(props, popupInheritKeys)), {
      default: () => [renderHeader(), renderRows(), renderCancelButton()]
    });
  }

});

exports.default = _default;