"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _cell = require("../cell");

var [name, bem, t] = (0, _utils.createNamespace)('contact-card');
var contactCardProps = {
  tel: String,
  name: String,
  type: (0, _utils.makeStringProp)('add'),
  addText: String,
  editable: _utils.truthProp
};

var _default = (0, _vue.defineComponent)({
  name,
  props: contactCardProps,
  emits: ['click'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;

    var onClick = event => {
      if (props.editable) {
        emit('click', event);
      }
    };

    var renderContent = () => {
      if (props.type === 'add') {
        return props.addText || t('addText');
      }

      return [(0, _vue.createVNode)("div", null, [t('name') + "\uFF1A" + props.name]), (0, _vue.createVNode)("div", null, [t('tel') + "\uFF1A" + props.tel])];
    };

    return () => (0, _vue.createVNode)(_cell.Cell, {
      "center": true,
      "icon": props.type === 'edit' ? 'contact' : 'add-square',
      "class": bem([props.type]),
      "border": false,
      "isLink": props.editable,
      "valueClass": bem('value'),
      "onClick": onClick
    }, {
      value: renderContent
    });
  }

});

exports.default = _default;