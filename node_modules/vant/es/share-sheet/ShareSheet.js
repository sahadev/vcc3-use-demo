import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue'; // Utils

import { pick, extend, truthProp, makeArrayProp, createNamespace, HAPTICS_FEEDBACK } from '../utils';
import { popupSharedProps, popupSharedPropKeys } from '../popup/shared'; // Components

import { Popup } from '../popup';
var PRESET_ICONS = ['qq', 'link', 'weibo', 'wechat', 'poster', 'qrcode', 'weapp-qrcode', 'wechat-moments'];
var popupInheritKeys = [...popupSharedPropKeys, 'round', 'closeOnPopstate', 'safeAreaInsetBottom'];

function getIconURL(icon) {
  if (PRESET_ICONS.includes(icon)) {
    return "https://img.yzcdn.cn/vant/share-sheet-" + icon + ".png";
  }

  return icon;
}

var [name, bem, t] = createNamespace('share-sheet');
var shareSheetProps = extend({}, popupSharedProps, {
  title: String,
  round: truthProp,
  options: makeArrayProp(),
  cancelText: String,
  description: String,
  closeOnPopstate: truthProp,
  safeAreaInsetBottom: truthProp
});
export default defineComponent({
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
        return _createVNode("div", {
          "class": bem('header')
        }, [title && _createVNode("h2", {
          "class": bem('title')
        }, [title]), description && _createVNode("span", {
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
      return _createVNode("div", {
        "role": "button",
        "tabindex": 0,
        "class": [bem('option'), className, HAPTICS_FEEDBACK],
        "onClick": () => onSelect(option, index)
      }, [_createVNode("img", {
        "src": getIconURL(icon),
        "class": bem('icon')
      }, null), name && _createVNode("span", {
        "class": bem('name')
      }, [name]), description && _createVNode("span", {
        "class": bem('option-description')
      }, [description])]);
    };

    var renderOptions = (options, border) => _createVNode("div", {
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
        return _createVNode("button", {
          "type": "button",
          "class": bem('cancel'),
          "onClick": onCancel
        }, [slots.cancel ? slots.cancel() : cancelText]);
      }
    };

    return () => _createVNode(Popup, _mergeProps({
      "class": bem(),
      "position": "bottom",
      "onUpdate:show": updateShow
    }, pick(props, popupInheritKeys)), {
      default: () => [renderHeader(), renderRows(), renderCancelButton()]
    });
  }

});