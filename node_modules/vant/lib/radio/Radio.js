"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _RadioGroup = require("../radio-group/RadioGroup");

var _use = require("@vant/use");

var _Checker = _interopRequireWildcard(require("../checkbox/Checker"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('radio');

var _default = (0, _vue.defineComponent)({
  name,
  props: _Checker.checkerProps,
  emits: ['update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      parent
    } = (0, _use.useParent)(_RadioGroup.RADIO_KEY);

    var checked = () => {
      var value = parent ? parent.props.modelValue : props.modelValue;
      return value === props.name;
    };

    var toggle = () => {
      if (parent) {
        parent.updateValue(props.name);
      } else {
        emit('update:modelValue', props.name);
      }
    };

    return () => (0, _vue.createVNode)(_Checker.default, (0, _vue.mergeProps)({
      "bem": bem,
      "role": "radio",
      "parent": parent,
      "checked": checked(),
      "onToggle": toggle
    }, props), (0, _utils.pick)(slots, ['default', 'icon']));
  }

});

exports.default = _default;