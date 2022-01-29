"use strict";

exports.__esModule = true;
exports.default = exports.cellSharedProps = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _useRoute = require("../composables/use-route");

var _icon = require("../icon");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('cell');
var cellSharedProps = {
  icon: String,
  size: String,
  title: _utils.numericProp,
  value: _utils.numericProp,
  label: _utils.numericProp,
  center: Boolean,
  isLink: Boolean,
  border: _utils.truthProp,
  required: Boolean,
  iconPrefix: String,
  valueClass: _utils.unknownProp,
  labelClass: _utils.unknownProp,
  titleClass: _utils.unknownProp,
  titleStyle: null,
  arrowDirection: String,
  clickable: {
    type: Boolean,
    default: null
  }
};
exports.cellSharedProps = cellSharedProps;
var cellProps = (0, _utils.extend)({}, cellSharedProps, _useRoute.routeProps);

var _default = (0, _vue.defineComponent)({
  name,
  props: cellProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var route = (0, _useRoute.useRoute)();

    var renderLabel = () => {
      var showLabel = slots.label || (0, _utils.isDef)(props.label);

      if (showLabel) {
        return (0, _vue.createVNode)("div", {
          "class": [bem('label'), props.labelClass]
        }, [slots.label ? slots.label() : props.label]);
      }
    };

    var renderTitle = () => {
      if (slots.title || (0, _utils.isDef)(props.title)) {
        return (0, _vue.createVNode)("div", {
          "class": [bem('title'), props.titleClass],
          "style": props.titleStyle
        }, [slots.title ? slots.title() : (0, _vue.createVNode)("span", null, [props.title]), renderLabel()]);
      }
    };

    var renderValue = () => {
      // slots.default is an alias of slots.value
      var slot = slots.value || slots.default;
      var hasValue = slot || (0, _utils.isDef)(props.value);

      if (hasValue) {
        var hasTitle = slots.title || (0, _utils.isDef)(props.title);
        return (0, _vue.createVNode)("div", {
          "class": [bem('value', {
            alone: !hasTitle
          }), props.valueClass]
        }, [slot ? slot() : (0, _vue.createVNode)("span", null, [props.value])]);
      }
    };

    var renderLeftIcon = () => {
      if (slots.icon) {
        return slots.icon();
      }

      if (props.icon) {
        return (0, _vue.createVNode)(_icon.Icon, {
          "name": props.icon,
          "class": bem('left-icon'),
          "classPrefix": props.iconPrefix
        }, null);
      }
    };

    var renderRightIcon = () => {
      if (slots['right-icon']) {
        return slots['right-icon']();
      }

      if (props.isLink) {
        var _name = props.arrowDirection ? "arrow-" + props.arrowDirection : 'arrow';

        return (0, _vue.createVNode)(_icon.Icon, {
          "name": _name,
          "class": bem('right-icon')
        }, null);
      }
    };

    return () => {
      var _props$clickable;

      var {
        size,
        center,
        border,
        isLink,
        required
      } = props;
      var clickable = (_props$clickable = props.clickable) != null ? _props$clickable : isLink;
      var classes = {
        center,
        required,
        clickable,
        borderless: !border
      };

      if (size) {
        classes[size] = !!size;
      }

      return (0, _vue.createVNode)("div", {
        "class": bem(classes),
        "role": clickable ? 'button' : undefined,
        "tabindex": clickable ? 0 : undefined,
        "onClick": route
      }, [renderLeftIcon(), renderTitle(), renderValue(), renderRightIcon(), slots.extra == null ? void 0 : slots.extra()]);
    };
  }

});

exports.default = _default;