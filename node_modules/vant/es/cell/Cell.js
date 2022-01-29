import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue'; // Utils

import { isDef, extend, truthProp, unknownProp, numericProp, createNamespace } from '../utils'; // Composables

import { useRoute, routeProps } from '../composables/use-route'; // Components

import { Icon } from '../icon';
var [name, bem] = createNamespace('cell');
export var cellSharedProps = {
  icon: String,
  size: String,
  title: numericProp,
  value: numericProp,
  label: numericProp,
  center: Boolean,
  isLink: Boolean,
  border: truthProp,
  required: Boolean,
  iconPrefix: String,
  valueClass: unknownProp,
  labelClass: unknownProp,
  titleClass: unknownProp,
  titleStyle: null,
  arrowDirection: String,
  clickable: {
    type: Boolean,
    default: null
  }
};
var cellProps = extend({}, cellSharedProps, routeProps);
export default defineComponent({
  name,
  props: cellProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var route = useRoute();

    var renderLabel = () => {
      var showLabel = slots.label || isDef(props.label);

      if (showLabel) {
        return _createVNode("div", {
          "class": [bem('label'), props.labelClass]
        }, [slots.label ? slots.label() : props.label]);
      }
    };

    var renderTitle = () => {
      if (slots.title || isDef(props.title)) {
        return _createVNode("div", {
          "class": [bem('title'), props.titleClass],
          "style": props.titleStyle
        }, [slots.title ? slots.title() : _createVNode("span", null, [props.title]), renderLabel()]);
      }
    };

    var renderValue = () => {
      // slots.default is an alias of slots.value
      var slot = slots.value || slots.default;
      var hasValue = slot || isDef(props.value);

      if (hasValue) {
        var hasTitle = slots.title || isDef(props.title);
        return _createVNode("div", {
          "class": [bem('value', {
            alone: !hasTitle
          }), props.valueClass]
        }, [slot ? slot() : _createVNode("span", null, [props.value])]);
      }
    };

    var renderLeftIcon = () => {
      if (slots.icon) {
        return slots.icon();
      }

      if (props.icon) {
        return _createVNode(Icon, {
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

        return _createVNode(Icon, {
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

      return _createVNode("div", {
        "class": bem(classes),
        "role": clickable ? 'button' : undefined,
        "tabindex": clickable ? 0 : undefined,
        "onClick": route
      }, [renderLeftIcon(), renderTitle(), renderValue(), renderRightIcon(), slots.extra == null ? void 0 : slots.extra()]);
    };
  }

});