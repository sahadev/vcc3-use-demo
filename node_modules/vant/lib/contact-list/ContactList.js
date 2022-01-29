"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _tag = require("../tag");

var _icon = require("../icon");

var _cell = require("../cell");

var _radio = require("../radio");

var _button = require("../button");

var _radioGroup = require("../radio-group");

// Utils
// Components
var [name, bem, t] = (0, _utils.createNamespace)('contact-list');
var contactListProps = {
  list: Array,
  addText: String,
  modelValue: _utils.unknownProp,
  defaultTagText: String
};

var _default = (0, _vue.defineComponent)({
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

      var renderRightIcon = () => (0, _vue.createVNode)(_radio.Radio, {
        "class": bem('radio'),
        "name": item.id,
        "iconSize": 16
      }, null);

      var renderEditIcon = () => (0, _vue.createVNode)(_icon.Icon, {
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
          nodes.push((0, _vue.createVNode)(_tag.Tag, {
            "type": "danger",
            "round": true,
            "class": bem('item-tag')
          }, {
            default: () => [props.defaultTagText]
          }));
        }

        return nodes;
      };

      return (0, _vue.createVNode)(_cell.Cell, {
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

    return () => (0, _vue.createVNode)("div", {
      "class": bem()
    }, [(0, _vue.createVNode)(_radioGroup.RadioGroup, {
      "modelValue": props.modelValue,
      "class": bem('group')
    }, {
      default: () => [props.list && props.list.map(renderItem)]
    }), (0, _vue.createVNode)("div", {
      "class": [bem('bottom'), 'van-safe-area-bottom']
    }, [(0, _vue.createVNode)(_button.Button, {
      "round": true,
      "block": true,
      "type": "danger",
      "class": bem('add'),
      "text": props.addText || t('addText'),
      "onClick": () => emit('add')
    }, null)])]);
  }

});

exports.default = _default;