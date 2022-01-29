import { mergeProps as _mergeProps, Fragment as _Fragment, createVNode as _createVNode } from "vue";
import { ref, watch, nextTick, onMounted, onBeforeUnmount, defineComponent } from 'vue';
import { createPopper, offsetModifier } from '@vant/popperjs'; // Utils

import { pick, extend, truthProp, numericProp, unknownProp, BORDER_BOTTOM, makeStringProp, createNamespace, makeArrayProp } from '../utils'; // Composables

import { useClickAway } from '@vant/use'; // Components

import { Icon } from '../icon';
import { Popup } from '../popup'; // Types

var [name, bem] = createNamespace('popover');
var popupProps = ['show', 'overlay', 'duration', 'teleport', 'overlayStyle', 'overlayClass', 'closeOnClickOverlay'];
var popoverProps = {
  show: Boolean,
  theme: makeStringProp('light'),
  overlay: Boolean,
  actions: makeArrayProp(),
  trigger: makeStringProp('click'),
  duration: numericProp,
  showArrow: truthProp,
  placement: makeStringProp('bottom'),
  iconPrefix: String,
  overlayClass: unknownProp,
  overlayStyle: Object,
  closeOnClickAction: truthProp,
  closeOnClickOverlay: truthProp,
  closeOnClickOutside: truthProp,
  offset: {
    type: Array,
    default: () => [0, 8]
  },
  teleport: {
    type: [String, Object],
    default: 'body'
  }
};
export default defineComponent({
  name,
  props: popoverProps,
  emits: ['select', 'touchstart', 'update:show'],

  setup(props, _ref) {
    var {
      emit,
      slots,
      attrs
    } = _ref;
    var popper;
    var wrapperRef = ref();
    var popoverRef = ref();

    var createPopperInstance = () => {
      if (wrapperRef.value && popoverRef.value) {
        return createPopper(wrapperRef.value, popoverRef.value.popupRef.value, {
          placement: props.placement,
          modifiers: [{
            name: 'computeStyles',
            options: {
              adaptive: false,
              gpuAcceleration: false
            }
          }, extend({}, offsetModifier, {
            options: {
              offset: props.offset
            }
          })]
        });
      }

      return null;
    };

    var updateLocation = () => {
      nextTick(() => {
        if (!props.show) {
          return;
        }

        if (!popper) {
          popper = createPopperInstance();
        } else {
          popper.setOptions({
            placement: props.placement
          });
        }
      });
    };

    var updateShow = value => emit('update:show', value);

    var onClickWrapper = () => {
      if (props.trigger === 'click') {
        updateShow(!props.show);
      }
    };

    var onTouchstart = event => {
      event.stopPropagation();
      emit('touchstart', event);
    };

    var onClickAction = (action, index) => {
      if (action.disabled) {
        return;
      }

      emit('select', action, index);

      if (props.closeOnClickAction) {
        updateShow(false);
      }
    };

    var onClickAway = () => {
      if (props.closeOnClickOutside && (!props.overlay || props.closeOnClickOverlay)) {
        updateShow(false);
      }
    };

    var renderAction = (action, index) => {
      var {
        icon,
        text,
        color,
        disabled,
        className
      } = action;
      return _createVNode("div", {
        "role": "menuitem",
        "class": [bem('action', {
          disabled,
          'with-icon': icon
        }), className],
        "style": {
          color
        },
        "tabindex": disabled ? undefined : 0,
        "aria-disabled": disabled || undefined,
        "onClick": () => onClickAction(action, index)
      }, [icon && _createVNode(Icon, {
        "name": icon,
        "classPrefix": props.iconPrefix,
        "class": bem('action-icon')
      }, null), _createVNode("div", {
        "class": [bem('action-text'), BORDER_BOTTOM]
      }, [text])]);
    };

    onMounted(updateLocation);
    onBeforeUnmount(() => {
      if (popper) {
        popper.destroy();
        popper = null;
      }
    });
    watch(() => [props.show, props.placement], updateLocation);
    useClickAway(wrapperRef, onClickAway, {
      eventName: 'touchstart'
    });
    return () => _createVNode(_Fragment, null, [_createVNode("span", {
      "ref": wrapperRef,
      "class": bem('wrapper'),
      "onClick": onClickWrapper
    }, [slots.reference == null ? void 0 : slots.reference()]), _createVNode(Popup, _mergeProps({
      "ref": popoverRef,
      "class": bem([props.theme]),
      "position": '',
      "transition": "van-popover-zoom",
      "lockScroll": false,
      "onTouchstart": onTouchstart,
      "onUpdate:show": updateShow
    }, attrs, pick(props, popupProps)), {
      default: () => [props.showArrow && _createVNode("div", {
        "class": bem('arrow')
      }, null), _createVNode("div", {
        "role": "menu",
        "class": bem('content')
      }, [slots.default ? slots.default() : props.actions.map(renderAction)])]
    })]);
  }

});