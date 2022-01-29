import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue'; // Utils

import { createNamespace, extend, makeRequiredProp } from '../utils'; // Components

import { Tag } from '../tag';
import { Icon } from '../icon';
import { Cell } from '../cell';
import { Radio } from '../radio';
var [name, bem] = createNamespace('address-item');
export default defineComponent({
  name,
  props: {
    address: makeRequiredProp(Object),
    disabled: Boolean,
    switchable: Boolean,
    defaultTagText: String
  },
  emits: ['edit', 'click', 'select'],

  setup(props, _ref) {
    var {
      slots,
      emit
    } = _ref;

    var onClick = () => {
      if (props.switchable) {
        emit('select');
      }

      emit('click');
    };

    var renderRightIcon = () => _createVNode(Icon, {
      "name": "edit",
      "class": bem('edit'),
      "onClick": event => {
        event.stopPropagation();
        emit('edit');
        emit('click');
      }
    }, null);

    var renderTag = () => {
      if (slots.tag) {
        return slots.tag(props.address);
      }

      if (props.address.isDefault && props.defaultTagText) {
        return _createVNode(Tag, {
          "type": "danger",
          "round": true,
          "class": bem('tag')
        }, {
          default: () => [props.defaultTagText]
        });
      }
    };

    var renderContent = () => {
      var {
        address,
        disabled,
        switchable
      } = props;
      var Info = [_createVNode("div", {
        "class": bem('name')
      }, [address.name + " " + address.tel, renderTag()]), _createVNode("div", {
        "class": bem('address')
      }, [address.address])];

      if (switchable && !disabled) {
        return _createVNode(Radio, {
          "name": address.id,
          "iconSize": 18
        }, {
          default: () => [Info]
        });
      }

      return Info;
    };

    return () => {
      var {
        disabled
      } = props;
      return _createVNode("div", {
        "class": bem({
          disabled
        }),
        "onClick": onClick
      }, [_createVNode(Cell, {
        "border": false,
        "valueClass": bem('value')
      }, {
        value: renderContent,
        'right-icon': renderRightIcon
      }), slots.bottom == null ? void 0 : slots.bottom(extend({}, props.address, {
        disabled
      }))]);
    };
  }

});