"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _popup = require("../popup");

var _shared = require("../popup/shared");

var [name, bem] = (0, _utils.createNamespace)('notify');
var notifyProps = (0, _utils.extend)({}, _shared.popupSharedProps, {
  type: (0, _utils.makeStringProp)('danger'),
  color: String,
  message: _utils.numericProp,
  className: _utils.unknownProp,
  background: String,
  lockScroll: Boolean
});

var _default = (0, _vue.defineComponent)({
  name,
  props: notifyProps,
  emits: ['update:show'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;

    var updateShow = show => emit('update:show', show);

    return () => (0, _vue.createVNode)(_popup.Popup, {
      "show": props.show,
      "class": [bem([props.type]), props.className],
      "style": {
        color: props.color,
        background: props.background
      },
      "overlay": false,
      "position": "top",
      "duration": 0.2,
      "lockScroll": props.lockScroll,
      "onUpdate:show": updateShow
    }, {
      default: () => [slots.default ? slots.default() : props.message]
    });
  }

});

exports.default = _default;