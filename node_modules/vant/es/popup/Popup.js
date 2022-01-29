import { Fragment as _Fragment, withDirectives as _withDirectives, mergeProps as _mergeProps, vShow as _vShow, createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { ref, watch, provide, Teleport, computed, onMounted, Transition, onActivated, onDeactivated, defineComponent } from 'vue'; // Utils

import { popupSharedProps } from './shared';
import { isDef, extend, makeStringProp, callInterceptor, createNamespace, HAPTICS_FEEDBACK } from '../utils'; // Composables

import { useEventListener } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useLockScroll } from '../composables/use-lock-scroll';
import { useLazyRender } from '../composables/use-lazy-render';
import { POPUP_TOGGLE_KEY } from '../composables/on-popup-reopen'; // Components

import { Icon } from '../icon';
import { Overlay } from '../overlay';
var popupProps = extend({}, popupSharedProps, {
  round: Boolean,
  position: makeStringProp('center'),
  closeIcon: makeStringProp('cross'),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: makeStringProp('top-right'),
  safeAreaInsetBottom: Boolean
});
var [name, bem] = createNamespace('popup');
var globalZIndex = 2000;
export default defineComponent({
  name,
  inheritAttrs: false,
  props: popupProps,
  emits: ['open', 'close', 'opened', 'closed', 'update:show', 'click-overlay', 'click-close-icon'],

  setup(props, _ref) {
    var {
      emit,
      attrs,
      slots
    } = _ref;
    var opened;
    var shouldReopen;
    var zIndex = ref();
    var popupRef = ref();
    var lazyRender = useLazyRender(() => props.show || !props.lazyRender);
    var style = computed(() => {
      var style = {
        zIndex: zIndex.value
      };

      if (isDef(props.duration)) {
        var key = props.position === 'center' ? 'animationDuration' : 'transitionDuration';
        style[key] = props.duration + "s";
      }

      return style;
    });

    var open = () => {
      if (!opened) {
        if (props.zIndex !== undefined) {
          globalZIndex = +props.zIndex;
        }

        opened = true;
        zIndex.value = ++globalZIndex;
        emit('open');
      }
    };

    var close = () => {
      if (opened) {
        callInterceptor(props.beforeClose, {
          done() {
            opened = false;
            emit('close');
            emit('update:show', false);
          }

        });
      }
    };

    var onClickOverlay = event => {
      emit('click-overlay', event);

      if (props.closeOnClickOverlay) {
        close();
      }
    };

    var renderOverlay = () => {
      if (props.overlay) {
        return _createVNode(Overlay, {
          "show": props.show,
          "class": props.overlayClass,
          "zIndex": zIndex.value,
          "duration": props.duration,
          "customStyle": props.overlayStyle,
          "onClick": onClickOverlay
        }, {
          default: slots['overlay-content']
        });
      }
    };

    var onClickCloseIcon = event => {
      emit('click-close-icon', event);
      close();
    };

    var renderCloseIcon = () => {
      if (props.closeable) {
        return _createVNode(Icon, {
          "role": "button",
          "tabindex": 0,
          "name": props.closeIcon,
          "class": [bem('close-icon', props.closeIconPosition), HAPTICS_FEEDBACK],
          "classPrefix": props.iconPrefix,
          "onClick": onClickCloseIcon
        }, null);
      }
    };

    var onOpened = () => emit('opened');

    var onClosed = () => emit('closed');

    var renderPopup = lazyRender(() => {
      var {
        round,
        position,
        safeAreaInsetBottom
      } = props;
      return _withDirectives(_createVNode("div", _mergeProps({
        "ref": popupRef,
        "style": style.value,
        "class": [bem({
          round,
          [position]: position
        }), {
          'van-safe-area-bottom': safeAreaInsetBottom
        }]
      }, attrs), [slots.default == null ? void 0 : slots.default(), renderCloseIcon()]), [[_vShow, props.show]]);
    });

    var renderTransition = () => {
      var {
        position,
        transition,
        transitionAppear
      } = props;
      var name = position === 'center' ? 'van-fade' : "van-popup-slide-" + position;
      return _createVNode(Transition, {
        "name": transition || name,
        "appear": transitionAppear,
        "onAfterEnter": onOpened,
        "onAfterLeave": onClosed
      }, {
        default: renderPopup
      });
    };

    watch(() => props.show, value => {
      if (value) {
        open();
      } else {
        opened = false;
        emit('close');
      }
    });
    useExpose({
      popupRef
    });
    useLockScroll(popupRef, () => props.show && props.lockScroll);
    useEventListener('popstate', () => {
      if (props.closeOnPopstate) {
        close();
        shouldReopen = false;
      }
    });
    onMounted(() => {
      if (props.show) {
        open();
      }
    });
    onActivated(() => {
      if (shouldReopen) {
        emit('update:show', true);
        shouldReopen = false;
      }
    });
    onDeactivated(() => {
      if (props.show) {
        close();
        shouldReopen = true;
      }
    });
    provide(POPUP_TOGGLE_KEY, () => props.show);
    return () => {
      if (props.teleport) {
        return _createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [renderOverlay(), renderTransition()]
        });
      }

      return _createVNode(_Fragment, null, [renderOverlay(), renderTransition()]);
    };
  }

});