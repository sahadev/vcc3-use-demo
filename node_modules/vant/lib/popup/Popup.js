"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _shared = require("./shared");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

var _useLockScroll = require("../composables/use-lock-scroll");

var _useLazyRender = require("../composables/use-lazy-render");

var _onPopupReopen = require("../composables/on-popup-reopen");

var _icon = require("../icon");

var _overlay = require("../overlay");

// Utils
// Composables
// Components
var popupProps = (0, _utils.extend)({}, _shared.popupSharedProps, {
  round: Boolean,
  position: (0, _utils.makeStringProp)('center'),
  closeIcon: (0, _utils.makeStringProp)('cross'),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: (0, _utils.makeStringProp)('top-right'),
  safeAreaInsetBottom: Boolean
});
var [name, bem] = (0, _utils.createNamespace)('popup');
var globalZIndex = 2000;

var _default = (0, _vue.defineComponent)({
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
    var zIndex = (0, _vue.ref)();
    var popupRef = (0, _vue.ref)();
    var lazyRender = (0, _useLazyRender.useLazyRender)(() => props.show || !props.lazyRender);
    var style = (0, _vue.computed)(() => {
      var style = {
        zIndex: zIndex.value
      };

      if ((0, _utils.isDef)(props.duration)) {
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
        (0, _utils.callInterceptor)(props.beforeClose, {
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
        return (0, _vue.createVNode)(_overlay.Overlay, {
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
        return (0, _vue.createVNode)(_icon.Icon, {
          "role": "button",
          "tabindex": 0,
          "name": props.closeIcon,
          "class": [bem('close-icon', props.closeIconPosition), _utils.HAPTICS_FEEDBACK],
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
      return (0, _vue.withDirectives)((0, _vue.createVNode)("div", (0, _vue.mergeProps)({
        "ref": popupRef,
        "style": style.value,
        "class": [bem({
          round,
          [position]: position
        }), {
          'van-safe-area-bottom': safeAreaInsetBottom
        }]
      }, attrs), [slots.default == null ? void 0 : slots.default(), renderCloseIcon()]), [[_vue.vShow, props.show]]);
    });

    var renderTransition = () => {
      var {
        position,
        transition,
        transitionAppear
      } = props;
      var name = position === 'center' ? 'van-fade' : "van-popup-slide-" + position;
      return (0, _vue.createVNode)(_vue.Transition, {
        "name": transition || name,
        "appear": transitionAppear,
        "onAfterEnter": onOpened,
        "onAfterLeave": onClosed
      }, {
        default: renderPopup
      });
    };

    (0, _vue.watch)(() => props.show, value => {
      if (value) {
        open();
      } else {
        opened = false;
        emit('close');
      }
    });
    (0, _useExpose.useExpose)({
      popupRef
    });
    (0, _useLockScroll.useLockScroll)(popupRef, () => props.show && props.lockScroll);
    (0, _use.useEventListener)('popstate', () => {
      if (props.closeOnPopstate) {
        close();
        shouldReopen = false;
      }
    });
    (0, _vue.onMounted)(() => {
      if (props.show) {
        open();
      }
    });
    (0, _vue.onActivated)(() => {
      if (shouldReopen) {
        emit('update:show', true);
        shouldReopen = false;
      }
    });
    (0, _vue.onDeactivated)(() => {
      if (props.show) {
        close();
        shouldReopen = true;
      }
    });
    (0, _vue.provide)(_onPopupReopen.POPUP_TOGGLE_KEY, () => props.show);
    return () => {
      if (props.teleport) {
        return (0, _vue.createVNode)(_vue.Teleport, {
          "to": props.teleport
        }, {
          default: () => [renderOverlay(), renderTransition()]
        });
      }

      return (0, _vue.createVNode)(_vue.Fragment, null, [renderOverlay(), renderTransition()]);
    };
  }

});

exports.default = _default;