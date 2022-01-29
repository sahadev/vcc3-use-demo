"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _CheckboxGroup = require("../checkbox-group/CheckboxGroup");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

var _Checker = _interopRequireWildcard(require("./Checker"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('checkbox');
var checkboxProps = (0, _utils.extend)({}, _Checker.checkerProps, {
  bindGroup: _utils.truthProp
});

var _default = (0, _vue.defineComponent)({
  name,
  props: checkboxProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      parent
    } = (0, _use.useParent)(_CheckboxGroup.CHECKBOX_GROUP_KEY);

    var setParentValue = checked => {
      var {
        name
      } = props;
      var {
        max,
        modelValue
      } = parent.props;
      var value = modelValue.slice();

      if (checked) {
        var overlimit = max && value.length >= max;

        if (!overlimit && !value.includes(name)) {
          value.push(name);

          if (props.bindGroup) {
            parent.updateValue(value);
          }
        }
      } else {
        var index = value.indexOf(name);

        if (index !== -1) {
          value.splice(index, 1);

          if (props.bindGroup) {
            parent.updateValue(value);
          }
        }
      }
    };

    var checked = (0, _vue.computed)(() => {
      if (parent && props.bindGroup) {
        return parent.props.modelValue.indexOf(props.name) !== -1;
      }

      return !!props.modelValue;
    });

    var toggle = function (newValue) {
      if (newValue === void 0) {
        newValue = !checked.value;
      }

      if (parent && props.bindGroup) {
        setParentValue(newValue);
      } else {
        emit('update:modelValue', newValue);
      }
    };

    (0, _vue.watch)(() => props.modelValue, value => emit('change', value));
    (0, _useExpose.useExpose)({
      toggle,
      props,
      checked
    });
    (0, _use.useCustomFieldValue)(() => props.modelValue);
    return () => (0, _vue.createVNode)(_Checker.default, (0, _vue.mergeProps)({
      "bem": bem,
      "role": "checkbox",
      "parent": parent,
      "checked": checked.value,
      "onToggle": toggle
    }, props), (0, _utils.pick)(slots, ['default', 'icon']));
  }

});

exports.default = _default;