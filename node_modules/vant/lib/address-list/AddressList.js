"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _button = require("../button");

var _radioGroup = require("../radio-group");

var _AddressListItem = _interopRequireDefault(require("./AddressListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utils
// Components
var [name, bem, t] = (0, _utils.createNamespace)('address-list');
var addressListProps = {
  list: (0, _utils.makeArrayProp)(),
  modelValue: _utils.numericProp,
  switchable: _utils.truthProp,
  disabledText: String,
  disabledList: (0, _utils.makeArrayProp)(),
  addButtonText: String,
  defaultTagText: String
};

var _default = (0, _vue.defineComponent)({
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

      return (0, _vue.createVNode)(_AddressListItem.default, {
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

    var renderBottom = () => (0, _vue.createVNode)("div", {
      "class": [bem('bottom'), 'van-safe-area-bottom']
    }, [(0, _vue.createVNode)(_button.Button, {
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
      var DisabledText = props.disabledText && (0, _vue.createVNode)("div", {
        "class": bem('disabled-text')
      }, [props.disabledText]);
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [slots.top == null ? void 0 : slots.top(), (0, _vue.createVNode)(_radioGroup.RadioGroup, {
        "modelValue": props.modelValue
      }, {
        default: () => [List]
      }), DisabledText, DisabledList, slots.default == null ? void 0 : slots.default(), renderBottom()]);
    };
  }

});

exports.default = _default;