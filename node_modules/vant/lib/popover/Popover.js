"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _popperjs = require("@vant/popperjs");

var _utils = require("../utils");

var _use = require("@vant/use");

var _icon = require("../icon");

var _popup = require("../popup");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('popover');
var popupProps = ['show', 'overlay', 'duration', 'teleport', 'overlayStyle', 'overlayClass', 'closeOnClickOverlay'];
var popoverProps = {
  show: Boolean,
  theme: (0, _utils.makeStringProp)('light'),
  overlay: Boolean,
  actions: (0, _utils.makeArrayProp)(),
  trigger: (0, _utils.makeStringProp)('click'),
  duration: _utils.numericProp,
  showArrow: _utils.truthProp,
  placement: (0, _utils.makeStringProp)('bottom'),
  iconPrefix: String,
  overlayClass: _utils.unknownProp,
  overlayStyle: Object,
  closeOnClickAction: _utils.truthProp,
  closeOnClickOverlay: _utils.truthProp,
  closeOnClickOutside: _utils.truthProp,
  offset: {
    type: Array,
    default: () => [0, 8]
  },
  teleport: {
    type: [String, Object],
    default: 'body'
  }
};

var _default = (0, _vue.defineComponent)({
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
    var wrapperRef = (0, _vue.ref)();
    var popoverRef = (0, _vue.ref)();

    var createPopperInstance = () => {
      if (wrapperRef.value && popoverRef.value) {
        return (0, _popperjs.createPopper)(wrapperRef.value, popoverRef.value.popupRef.value, {
          placement: props.placement,
          modifiers: [{
            name: 'computeStyles',
            options: {
              adaptive: false,
              gpuAcceleration: false
            }
          }, (0, _utils.extend)({}, _popperjs.offsetModifier, {
            options: {
              offset: props.offset
            }
          })]
        });
      }

      return null;
    };

    var updateLocation = () => {
      (0, _vue.nextTick)(() => {
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
      return (0, _vue.createVNode)("div", {
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
      }, [icon && (0, _vue.createVNode)(_icon.Icon, {
        "name": icon,
        "classPrefix": props.iconPrefix,
        "class": bem('action-icon')
      }, null), (0, _vue.createVNode)("div", {
        "class": [bem('action-text'), _utils.BORDER_BOTTOM]
      }, [text])]);
    };

    (0, _vue.onMounted)(updateLocation);
    (0, _vue.onBeforeUnmount)(() => {
      if (popper) {
        popper.destroy();
        popper = null;
      }
    });
    (0, _vue.watch)(() => [props.show, props.placement], updateLocation);
    (0, _use.useClickAway)(wrapperRef, onClickAway, {
      eventName: 'touchstart'
    });
    return () => (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("span", {
      "ref": wrapperRef,
      "class": bem('wrapper'),
      "onClick": onClickWrapper
    }, [slots.reference == null ? void 0 : slots.reference()]), (0, _vue.createVNode)(_popup.Popup, (0, _vue.mergeProps)({
      "ref": popoverRef,
      "class": bem([props.theme]),
      "position": '',
      "transition": "van-popover-zoom",
      "lockScroll": false,
      "onTouchstart": onTouchstart,
      "onUpdate:show": updateShow
    }, attrs, (0, _utils.pick)(props, popupProps)), {
      default: () => [props.showArrow && (0, _vue.createVNode)("div", {
        "class": bem('arrow')
      }, null), (0, _vue.createVNode)("div", {
        "role": "menu",
        "class": bem('content')
      }, [slots.default ? slots.default() : props.actions.map(renderAction)])]
    })]);
  }

});

exports.default = _default;