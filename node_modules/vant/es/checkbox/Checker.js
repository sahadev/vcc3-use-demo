import { createVNode as _createVNode } from "vue";
import { ref, computed, defineComponent } from 'vue';
import { extend, addUnit, truthProp, numericProp, unknownProp, makeStringProp, makeRequiredProp } from '../utils';
import { Icon } from '../icon';
export var checkerProps = {
  name: unknownProp,
  shape: makeStringProp('round'),
  disabled: Boolean,
  iconSize: numericProp,
  modelValue: unknownProp,
  checkedColor: String,
  labelPosition: String,
  labelDisabled: Boolean
};
export default defineComponent({
  props: extend({}, checkerProps, {
    bem: makeRequiredProp(Function),
    role: String,
    parent: Object,
    checked: Boolean,
    bindGroup: truthProp
  }),
  emits: ['click', 'toggle'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var iconRef = ref();

    var getParentProp = name => {
      if (props.parent && props.bindGroup) {
        return props.parent.props[name];
      }
    };

    var disabled = computed(() => getParentProp('disabled') || props.disabled);
    var direction = computed(() => getParentProp('direction'));
    var iconStyle = computed(() => {
      var checkedColor = props.checkedColor || getParentProp('checkedColor');

      if (checkedColor && props.checked && !disabled.value) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    });

    var onClick = event => {
      var {
        target
      } = event;
      var icon = iconRef.value;
      var iconClicked = icon === target || (icon == null ? void 0 : icon.contains(target));

      if (!disabled.value && (iconClicked || !props.labelDisabled)) {
        emit('toggle');
      }

      emit('click', event);
    };

    var renderIcon = () => {
      var {
        bem,
        shape,
        checked
      } = props;
      var iconSize = props.iconSize || getParentProp('iconSize');
      return _createVNode("div", {
        "ref": iconRef,
        "class": bem('icon', [shape, {
          disabled: disabled.value,
          checked
        }]),
        "style": {
          fontSize: addUnit(iconSize)
        }
      }, [slots.icon ? slots.icon({
        checked,
        disabled: disabled.value
      }) : _createVNode(Icon, {
        "name": "success",
        "style": iconStyle.value
      }, null)]);
    };

    var renderLabel = () => {
      if (slots.default) {
        return _createVNode("span", {
          "class": props.bem('label', [props.labelPosition, {
            disabled: disabled.value
          }])
        }, [slots.default()]);
      }
    };

    return () => {
      var nodes = props.labelPosition === 'left' ? [renderLabel(), renderIcon()] : [renderIcon(), renderLabel()];
      return _createVNode("div", {
        "role": props.role,
        "class": props.bem([{
          disabled: disabled.value,
          'label-disabled': props.labelDisabled
        }, direction.value]),
        "tabindex": disabled.value ? undefined : 0,
        "aria-checked": props.checked,
        "onClick": onClick
      }, [nodes]);
    };
  }

});