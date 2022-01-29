"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _DropdownMenu = require("../dropdown-menu/DropdownMenu");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

var _cell = require("../cell");

var _icon = require("../icon");

var _popup = require("../popup");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('dropdown-item');
var dropdownItemProps = {
  title: String,
  options: (0, _utils.makeArrayProp)(),
  disabled: Boolean,
  teleport: [String, Object],
  lazyRender: _utils.truthProp,
  modelValue: _utils.unknownProp,
  titleClass: _utils.unknownProp
};

var _default = (0, _vue.defineComponent)({
  name,
  props: dropdownItemProps,
  emits: ['open', 'opened', 'close', 'closed', 'change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var state = (0, _vue.reactive)({
      showPopup: false,
      transition: true,
      showWrapper: false
    });
    var {
      parent,
      index
    } = (0, _use.useParent)(_DropdownMenu.DROPDOWN_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <DropdownItem> must be a child component of <DropdownMenu>.');
      }

      return;
    }

    var getEmitter = name => () => emit(name);

    var onOpen = getEmitter('open');
    var onClose = getEmitter('close');
    var onOpened = getEmitter('opened');

    var onClosed = () => {
      state.showWrapper = false;
      emit('closed');
    };

    var onClickWrapper = event => {
      // prevent being identified as clicking outside and closed when using teleport
      if (props.teleport) {
        event.stopPropagation();
      }
    };

    var toggle = function (show, options) {
      if (show === void 0) {
        show = !state.showPopup;
      }

      if (options === void 0) {
        options = {};
      }

      if (show === state.showPopup) {
        return;
      }

      state.showPopup = show;
      state.transition = !options.immediate;

      if (show) {
        state.showWrapper = true;
      }
    };

    var renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }

      if (props.title) {
        return props.title;
      }

      var match = props.options.find(option => option.value === props.modelValue);
      return match ? match.text : '';
    };

    var renderOption = option => {
      var {
        activeColor
      } = parent.props;
      var active = option.value === props.modelValue;

      var onClick = () => {
        state.showPopup = false;

        if (option.value !== props.modelValue) {
          emit('update:modelValue', option.value);
          emit('change', option.value);
        }
      };

      var renderIcon = () => {
        if (active) {
          return (0, _vue.createVNode)(_icon.Icon, {
            "class": bem('icon'),
            "color": activeColor,
            "name": "success"
          }, null);
        }
      };

      return (0, _vue.createVNode)(_cell.Cell, {
        "role": "menuitem",
        "key": option.value,
        "icon": option.icon,
        "title": option.text,
        "class": bem('option', {
          active
        }),
        "style": {
          color: active ? activeColor : ''
        },
        "tabindex": active ? 0 : -1,
        "clickable": true,
        "onClick": onClick
      }, {
        value: renderIcon
      });
    };

    var renderContent = () => {
      var {
        offset
      } = parent;
      var {
        zIndex,
        overlay,
        duration,
        direction,
        closeOnClickOverlay
      } = parent.props;
      var style = (0, _utils.getZIndexStyle)(zIndex);

      if (direction === 'down') {
        style.top = offset.value + "px";
      } else {
        style.bottom = offset.value + "px";
      }

      return (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
        "style": style,
        "class": bem([direction]),
        "onClick": onClickWrapper
      }, [(0, _vue.createVNode)(_popup.Popup, {
        "show": state.showPopup,
        "onUpdate:show": $event => state.showPopup = $event,
        "role": "menu",
        "class": bem('content'),
        "overlay": overlay,
        "position": direction === 'down' ? 'top' : 'bottom',
        "duration": state.transition ? duration : 0,
        "lazyRender": props.lazyRender,
        "overlayStyle": {
          position: 'absolute'
        },
        "aria-labelledby": parent.id + "-" + index.value,
        "closeOnClickOverlay": closeOnClickOverlay,
        "onOpen": onOpen,
        "onClose": onClose,
        "onOpened": onOpened,
        "onClosed": onClosed
      }, {
        default: () => [props.options.map(renderOption), slots.default == null ? void 0 : slots.default()]
      })]), [[_vue.vShow, state.showWrapper]]);
    };

    (0, _useExpose.useExpose)({
      state,
      toggle,
      renderTitle
    });
    return () => {
      if (props.teleport) {
        return (0, _vue.createVNode)(_vue.Teleport, {
          "to": props.teleport
        }, {
          default: () => [renderContent()]
        });
      }

      return renderContent();
    };
  }

});

exports.default = _default;