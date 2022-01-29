import { withDirectives as _withDirectives, vShow as _vShow, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { ref, watch, computed, Teleport, Transition, defineComponent } from 'vue'; // Utils

import { truthProp, numericProp, getZIndexStyle, makeStringProp, makeNumericProp, stopPropagation, createNamespace, HAPTICS_FEEDBACK } from '../utils'; // Composables

import { useClickAway } from '@vant/use'; // Components

import NumberKeyboardKey from './NumberKeyboardKey';
var [name, bem] = createNamespace('number-keyboard');
var numberKeyboardProps = {
  show: Boolean,
  title: String,
  theme: makeStringProp('default'),
  zIndex: numericProp,
  teleport: [String, Object],
  maxlength: makeNumericProp(Infinity),
  modelValue: makeStringProp(''),
  transition: truthProp,
  blurOnClose: truthProp,
  showDeleteKey: truthProp,
  randomKeyOrder: Boolean,
  closeButtonText: String,
  deleteButtonText: String,
  closeButtonLoading: Boolean,
  hideOnClickOutside: truthProp,
  safeAreaInsetBottom: truthProp,
  extraKey: {
    type: [String, Array],
    default: ''
  }
};
export default defineComponent({
  name,
  props: numberKeyboardProps,
  emits: ['show', 'hide', 'blur', 'input', 'close', 'delete', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var root = ref();

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

    var keys = computed(() => props.theme === 'custom' ? genCustomKeys() : genDefaultKeys());

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

      return _createVNode("div", {
        "class": bem('header')
      }, [leftSlot && _createVNode("span", {
        "class": bem('title-left')
      }, [leftSlot()]), title && _createVNode("h2", {
        "class": bem('title')
      }, [title]), showClose && _createVNode("button", {
        "type": "button",
        "class": [bem('close'), HAPTICS_FEEDBACK],
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

      return _createVNode(NumberKeyboardKey, {
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
        return _createVNode("div", {
          "class": bem('sidebar')
        }, [props.showDeleteKey && _createVNode(NumberKeyboardKey, {
          "large": true,
          "text": props.deleteButtonText,
          "type": "delete",
          "onPress": onPress
        }, {
          delete: slots.delete
        }), _createVNode(NumberKeyboardKey, {
          "large": true,
          "text": props.closeButtonText,
          "type": "close",
          "color": "blue",
          "loading": props.closeButtonLoading,
          "onPress": onPress
        }, null)]);
      }
    };

    watch(() => props.show, value => {
      if (!props.transition) {
        emit(value ? 'show' : 'hide');
      }
    });

    if (props.hideOnClickOutside) {
      useClickAway(root, onBlur, {
        eventName: 'touchstart'
      });
    }

    return () => {
      var Title = renderTitle();

      var Content = _createVNode(Transition, {
        "name": props.transition ? 'van-slide-up' : ''
      }, {
        default: () => [_withDirectives(_createVNode("div", {
          "ref": root,
          "style": getZIndexStyle(props.zIndex),
          "class": bem({
            unfit: !props.safeAreaInsetBottom,
            'with-title': !!Title
          }),
          "onTouchstart": stopPropagation,
          "onAnimationend": onAnimationEnd,
          "onWebkitAnimationEnd": onAnimationEnd
        }, [Title, _createVNode("div", {
          "class": bem('body')
        }, [_createVNode("div", {
          "class": bem('keys')
        }, [renderKeys()]), renderSidebar()])]), [[_vShow, props.show]])]
      });

      if (props.teleport) {
        return _createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [Content]
        });
      }

      return Content;
    };
  }

});