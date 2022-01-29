import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
import { watch, onMounted, onUnmounted, defineComponent } from 'vue'; // Utils

import { pick, isDef, unknownProp, numericProp, makeStringProp, makeNumberProp, createNamespace } from '../utils';
import { lockClick } from './lock-click'; // Components

import { Icon } from '../icon';
import { Popup } from '../popup';
import { Loading } from '../loading'; // Types

var [name, bem] = createNamespace('toast');
var popupInheritProps = ['show', 'overlay', 'transition', 'overlayClass', 'overlayStyle', 'closeOnClickOverlay'];
var toastProps = {
  icon: String,
  show: Boolean,
  type: makeStringProp('text'),
  overlay: Boolean,
  message: numericProp,
  iconSize: numericProp,
  duration: makeNumberProp(2000),
  position: makeStringProp('middle'),
  className: unknownProp,
  iconPrefix: String,
  transition: makeStringProp('van-fade'),
  loadingType: String,
  forbidClick: Boolean,
  overlayClass: unknownProp,
  overlayStyle: Object,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean
};
export default defineComponent({
  name,
  props: toastProps,
  emits: ['update:show'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var timer;
    var clickable = false;

    var toggleClickable = () => {
      var newValue = props.show && props.forbidClick;

      if (clickable !== newValue) {
        clickable = newValue;
        lockClick(clickable);
      }
    };

    var updateShow = show => emit('update:show', show);

    var onClick = () => {
      if (props.closeOnClick) {
        updateShow(false);
      }
    };

    var clearTimer = () => clearTimeout(timer);

    var renderIcon = () => {
      var {
        icon,
        type,
        iconSize,
        iconPrefix,
        loadingType
      } = props;
      var hasIcon = icon || type === 'success' || type === 'fail';

      if (hasIcon) {
        return _createVNode(Icon, {
          "name": icon || type,
          "size": iconSize,
          "class": bem('icon'),
          "classPrefix": iconPrefix
        }, null);
      }

      if (type === 'loading') {
        return _createVNode(Loading, {
          "class": bem('loading'),
          "size": iconSize,
          "type": loadingType
        }, null);
      }
    };

    var renderMessage = () => {
      var {
        type,
        message
      } = props;

      if (isDef(message) && message !== '') {
        return type === 'html' ? _createVNode("div", {
          "class": bem('text'),
          "innerHTML": String(message)
        }, null) : _createVNode("div", {
          "class": bem('text')
        }, [message]);
      }
    };

    watch(() => [props.show, props.forbidClick], toggleClickable);
    watch(() => [props.show, props.type, props.message, props.duration], () => {
      clearTimer();

      if (props.show && props.duration > 0) {
        timer = setTimeout(() => {
          updateShow(false);
        }, props.duration);
      }
    });
    onMounted(toggleClickable);
    onUnmounted(toggleClickable);
    return () => _createVNode(Popup, _mergeProps({
      "class": [bem([props.position, {
        [props.type]: !props.icon
      }]), props.className],
      "lockScroll": false,
      "onClick": onClick,
      "onClosed": clearTimer,
      "onUpdate:show": updateShow
    }, pick(props, popupInheritProps)), {
      default: () => [renderIcon(), renderMessage()]
    });
  }

});