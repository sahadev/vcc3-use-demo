import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue'; // Utils

import { createNamespace, unknownProp } from '../utils'; // Components

import { Tag } from '../tag';
import { Icon } from '../icon';
import { Cell } from '../cell';
import { Radio } from '../radio';
import { Button } from '../button';
import { RadioGroup } from '../radio-group';
var [name, bem, t] = createNamespace('contact-list');
var contactListProps = {
  list: Array,
  addText: String,
  modelValue: unknownProp,
  defaultTagText: String
};
export default defineComponent({
  name,
  props: contactListProps,
  emits: ['add', 'edit', 'select', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;

    var renderItem = (item, index) => {
      var onClick = () => {
        emit('update:modelValue', item.id);
        emit('select', item, index);
      };

      var renderRightIcon = () => _createVNode(Radio, {
        "class": bem('radio'),
        "name": item.id,
        "iconSize": 16
      }, null);

      var renderEditIcon = () => _createVNode(Icon, {
        "name": "edit",
        "class": bem('edit'),
        "onClick": event => {
          event.stopPropagation();
          emit('edit', item, index);
        }
      }, null);

      var renderContent = () => {
        var nodes = [item.name + "\uFF0C" + item.tel];

        if (item.isDefault && props.defaultTagText) {
          nodes.push(_createVNode(Tag, {
            "type": "danger",
            "round": true,
            "class": bem('item-tag')
          }, {
            default: () => [props.defaultTagText]
          }));
        }

        return nodes;
      };

      return _createVNode(Cell, {
        "key": item.id,
        "isLink": true,
        "center": true,
        "class": bem('item'),
        "valueClass": bem('item-value'),
        "onClick": onClick
      }, {
        icon: renderEditIcon,
        value: renderContent,
        'right-icon': renderRightIcon
      });
    };

    return () => _createVNode("div", {
      "class": bem()
    }, [_createVNode(RadioGroup, {
      "modelValue": props.modelValue,
      "class": bem('group')
    }, {
      default: () => [props.list && props.list.map(renderItem)]
    }), _createVNode("div", {
      "class": [bem('bottom'), 'van-safe-area-bottom']
    }, [_createVNode(Button, {
      "round": true,
      "block": true,
      "type": "danger",
      "class": bem('add'),
      "text": props.addText || t('addText'),
      "onClick": () => emit('add')
    }, null)])]);
  }

});