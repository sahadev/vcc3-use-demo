import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
import { nextTick, defineComponent } from 'vue'; // Utils

import { pick, extend, truthProp, makeArrayProp, makeStringProp, createNamespace, HAPTICS_FEEDBACK } from '../utils'; // Components

import { Icon } from '../icon';
import { Popup } from '../popup';
import { Loading } from '../loading';
import { popupSharedProps, popupSharedPropKeys } from '../popup/shared';
var [name, bem] = createNamespace('action-sheet');
var actionSheetProps = extend({}, popupSharedProps, {
  title: String,
  round: truthProp,
  actions: makeArrayProp(),
  closeIcon: makeStringProp('cross'),
  closeable: truthProp,
  cancelText: String,
  description: String,
  closeOnPopstate: truthProp,
  closeOnClickAction: Boolean,
  safeAreaInsetBottom: truthProp
});
var popupInheritKeys = [...popupSharedPropKeys, 'round', 'closeOnPopstate', 'safeAreaInsetBottom'];
export default defineComponent({
  name,
  props: actionSheetProps,
  emits: ['select', 'cancel', 'update:show'],

  setup(props, _ref) {
    var {
      slots,
      emit
    } = _ref;

    var updateShow = show => emit('update:show', show);

    var onCancel = () => {
      updateShow(false);
      emit('cancel');
    };

    var renderHeader = () => {
      if (props.title) {
        return _createVNode("div", {
          "class": bem('header')
        }, [props.title, props.closeable && _createVNode(Icon, {
          "name": props.closeIcon,
          "class": [bem('close'), HAPTICS_FEEDBACK],
          "onClick": onCancel
        }, null)]);
      }
    };

    var renderCancel = () => {
      if (slots.cancel || props.cancelText) {
        return [_createVNode("div", {
          "class": bem('gap')
        }, null), _createVNode("button", {
          "type": "button",
          "class": bem('cancel'),
          "onClick": onCancel
        }, [slots.cancel ? slots.cancel() : props.cancelText])];
      }
    };

    var renderOption = (item, index) => {
      var {
        name,
        color,
        subname,
        loading,
        callback,
        disabled,
        className
      } = item;
      var Content = loading ? _createVNode(Loading, {
        "class": bem('loading-icon')
      }, null) : [_createVNode("span", {
        "class": bem('name')
      }, [name]), subname && _createVNode("div", {
        "class": bem('subname')
      }, [subname])];

      var onClick = () => {
        if (disabled || loading) {
          return;
        }

        if (callback) {
          callback(item);
        }

        if (props.closeOnClickAction) {
          updateShow(false);
        }

        nextTick(() => emit('select', item, index));
      };

      return _createVNode("button", {
        "type": "button",
        "style": {
          color
        },
        "class": [bem('item', {
          loading,
          disabled
        }), className],
        "onClick": onClick
      }, [Content]);
    };

    var renderDescription = () => {
      if (props.description || slots.description) {
        var content = slots.description ? slots.description() : props.description;
        return _createVNode("div", {
          "class": bem('description')
        }, [content]);
      }
    };

    return () => _createVNode(Popup, _mergeProps({
      "class": bem(),
      "position": "bottom",
      "onUpdate:show": updateShow
    }, pick(props, popupInheritKeys)), {
      default: () => [renderHeader(), renderDescription(), _createVNode("div", {
        "class": bem('content')
      }, [props.actions.map(renderOption), slots.default == null ? void 0 : slots.default()]), renderCancel()]
    });
  }

});