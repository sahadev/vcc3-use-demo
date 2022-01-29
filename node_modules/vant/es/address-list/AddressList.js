import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { defineComponent } from 'vue'; // Utils

import { truthProp, numericProp, makeArrayProp, createNamespace } from '../utils'; // Components

import { Button } from '../button';
import { RadioGroup } from '../radio-group';
import AddressListItem from './AddressListItem';
var [name, bem, t] = createNamespace('address-list');
var addressListProps = {
  list: makeArrayProp(),
  modelValue: numericProp,
  switchable: truthProp,
  disabledText: String,
  disabledList: makeArrayProp(),
  addButtonText: String,
  defaultTagText: String
};
export default defineComponent({
  name,
  props: addressListProps,
  emits: ['add', 'edit', 'select', 'click-item', 'edit-disabled', 'select-disabled', 'update:modelValue'],

  setup(props, _ref) {
    var {
      slots,
      emit
    } = _ref;

    var renderItem = (item, index, disabled) => {
      var onEdit = () => emit(disabled ? 'edit-disabled' : 'edit', item, index);

      var onClick = () => emit('click-item', item, index);

      var onSelect = () => {
        emit(disabled ? 'select-disabled' : 'select', item, index);

        if (!disabled) {
          emit('update:modelValue', item.id);
        }
      };

      return _createVNode(AddressListItem, {
        "key": item.id,
        "address": item,
        "disabled": disabled,
        "switchable": props.switchable,
        "defaultTagText": props.defaultTagText,
        "onEdit": onEdit,
        "onClick": onClick,
        "onSelect": onSelect
      }, {
        bottom: slots['item-bottom'],
        tag: slots.tag
      });
    };

    var renderList = (list, disabled) => {
      if (list) {
        return list.map((item, index) => renderItem(item, index, disabled));
      }
    };

    var renderBottom = () => _createVNode("div", {
      "class": [bem('bottom'), 'van-safe-area-bottom']
    }, [_createVNode(Button, {
      "round": true,
      "block": true,
      "type": "danger",
      "text": props.addButtonText || t('add'),
      "class": bem('add'),
      "onClick": () => emit('add')
    }, null)]);

    return () => {
      var List = renderList(props.list);
      var DisabledList = renderList(props.disabledList, true);

      var DisabledText = props.disabledText && _createVNode("div", {
        "class": bem('disabled-text')
      }, [props.disabledText]);

      return _createVNode("div", {
        "class": bem()
      }, [slots.top == null ? void 0 : slots.top(), _createVNode(RadioGroup, {
        "modelValue": props.modelValue
      }, {
        default: () => [List]
      }), DisabledText, DisabledList, slots.default == null ? void 0 : slots.default(), renderBottom()]);
    };
  }

});