import { withDirectives as _withDirectives, vShow as _vShow, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { reactive, Teleport, defineComponent } from 'vue'; // Utils

import { truthProp, unknownProp, getZIndexStyle, createNamespace, makeArrayProp } from '../utils';
import { DROPDOWN_KEY } from '../dropdown-menu/DropdownMenu'; // Composables

import { useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose'; // Components

import { Cell } from '../cell';
import { Icon } from '../icon';
import { Popup } from '../popup'; // Types

var [name, bem] = createNamespace('dropdown-item');
var dropdownItemProps = {
  title: String,
  options: makeArrayProp(),
  disabled: Boolean,
  teleport: [String, Object],
  lazyRender: truthProp,
  modelValue: unknownProp,
  titleClass: unknownProp
};
export default defineComponent({
  name,
  props: dropdownItemProps,
  emits: ['open', 'opened', 'close', 'closed', 'change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var state = reactive({
      showPopup: false,
      transition: true,
      showWrapper: false
    });
    var {
      parent,
      index
    } = useParent(DROPDOWN_KEY);

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
          return _createVNode(Icon, {
            "class": bem('icon'),
            "color": activeColor,
            "name": "success"
          }, null);
        }
      };

      return _createVNode(Cell, {
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
      var style = getZIndexStyle(zIndex);

      if (direction === 'down') {
        style.top = offset.value + "px";
      } else {
        style.bottom = offset.value + "px";
      }

      return _withDirectives(_createVNode("div", {
        "style": style,
        "class": bem([direction]),
        "onClick": onClickWrapper
      }, [_createVNode(Popup, {
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
      })]), [[_vShow, state.showWrapper]]);
    };

    useExpose({
      state,
      toggle,
      renderTitle
    });
    return () => {
      if (props.teleport) {
        return _createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [renderContent()]
        });
      }

      return renderContent();
    };
  }

});