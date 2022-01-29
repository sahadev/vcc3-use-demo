"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _tag = require("../tag");

var _icon = require("../icon");

var _cell = require("../cell");

var _radio = require("../radio");

// Utils
// Components
var [name, bem] = (0, _utils.createNamespace)('address-item');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    address: (0, _utils.makeRequiredProp)(Object),
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

    var renderRightIcon = () => (0, _vue.createVNode)(_icon.Icon, {
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
        return (0, _vue.createVNode)(_tag.Tag, {
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
      var Info = [(0, _vue.createVNode)("div", {
        "class": bem('name')
      }, [address.name + " " + address.tel, renderTag()]), (0, _vue.createVNode)("div", {
        "class": bem('address')
      }, [address.address])];

      if (switchable && !disabled) {
        return (0, _vue.createVNode)(_radio.Radio, {
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
      return (0, _vue.createVNode)("div", {
        "class": bem({
          disabled
        }),
        "onClick": onClick
      }, [(0, _vue.createVNode)(_cell.Cell, {
        "border": false,
        "valueClass": bem('value')
      }, {
        value: renderContent,
        'right-icon': renderRightIcon
      }), slots.bottom == null ? void 0 : slots.bottom((0, _utils.extend)({}, props.address, {
        disabled
      }))]);
    };
  }

});

exports.default = _default;