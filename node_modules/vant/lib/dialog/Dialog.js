"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _shared = require("../popup/shared");

var _popup = require("../popup");

var _button = require("../button");

var _actionBar = require("../action-bar");

var _actionBarButton = require("../action-bar-button");

// Utils
// Components
var [name, bem, t] = (0, _utils.createNamespace)('dialog');
var dialogProps = (0, _utils.extend)({}, _shared.popupSharedProps, {
  title: String,
  theme: String,
  width: _utils.numericProp,
  message: [String, Function],
  callback: Function,
  allowHtml: Boolean,
  className: _utils.unknownProp,
  transition: (0, _utils.makeStringProp)('van-dialog-bounce'),
  messageAlign: String,
  closeOnPopstate: _utils.truthProp,
  showCancelButton: Boolean,
  cancelButtonText: String,
  cancelButtonColor: String,
  confirmButtonText: String,
  confirmButtonColor: String,
  showConfirmButton: _utils.truthProp,
  closeOnClickOverlay: Boolean
});
var popupInheritKeys = [..._shared.popupSharedPropKeys, 'transition', 'closeOnPopstate'];

var _default = (0, _vue.defineComponent)({
  name,
  props: dialogProps,
  emits: ['confirm', 'cancel', 'update:show'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var loading = (0, _vue.reactive)({
      confirm: false,
      cancel: false
    });

    var updateShow = value => emit('update:show', value);

    var close = action => {
      updateShow(false);
      props.callback == null ? void 0 : props.callback(action);
    };

    var getActionHandler = action => () => {
      // should not trigger close event when hidden
      if (!props.show) {
        return;
      }

      emit(action);

      if (props.beforeClose) {
        loading[action] = true;
        (0, _utils.callInterceptor)(props.beforeClose, {
          args: [action],

          done() {
            close(action);
            loading[action] = false;
          },

          canceled() {
            loading[action] = false;
          }

        });
      } else {
        close(action);
      }
    };

    var onCancel = getActionHandler('cancel');
    var onConfirm = getActionHandler('confirm');

    var renderTitle = () => {
      var title = slots.title ? slots.title() : props.title;

      if (title) {
        return (0, _vue.createVNode)("div", {
          "class": bem('header', {
            isolated: !props.message && !slots.default
          })
        }, [title]);
      }
    };

    var renderMessage = hasTitle => {
      var {
        message,
        allowHtml,
        messageAlign
      } = props;
      var classNames = bem('message', {
        'has-title': hasTitle,
        [messageAlign]: messageAlign
      });
      var content = (0, _utils.isFunction)(message) ? message() : message;

      if (allowHtml && typeof content === 'string') {
        return (0, _vue.createVNode)("div", {
          "class": classNames,
          "innerHTML": content
        }, null);
      }

      return (0, _vue.createVNode)("div", {
        "class": classNames
      }, [content]);
    };

    var renderContent = () => {
      if (slots.default) {
        return (0, _vue.createVNode)("div", {
          "class": bem('content')
        }, [slots.default()]);
      }

      var {
        title,
        message,
        allowHtml
      } = props;

      if (message) {
        var hasTitle = !!(title || slots.title);
        return (0, _vue.createVNode)("div", {
          "key": allowHtml ? 1 : 0,
          "class": bem('content', {
            isolated: !hasTitle
          })
        }, [renderMessage(hasTitle)]);
      }
    };

    var renderButtons = () => (0, _vue.createVNode)("div", {
      "class": [_utils.BORDER_TOP, bem('footer')]
    }, [props.showCancelButton && (0, _vue.createVNode)(_button.Button, {
      "size": "large",
      "text": props.cancelButtonText || t('cancel'),
      "class": bem('cancel'),
      "style": {
        color: props.cancelButtonColor
      },
      "loading": loading.cancel,
      "onClick": onCancel
    }, null), props.showConfirmButton && (0, _vue.createVNode)(_button.Button, {
      "size": "large",
      "text": props.confirmButtonText || t('confirm'),
      "class": [bem('confirm'), {
        [_utils.BORDER_LEFT]: props.showCancelButton
      }],
      "style": {
        color: props.confirmButtonColor
      },
      "loading": loading.confirm,
      "onClick": onConfirm
    }, null)]);

    var renderRoundButtons = () => (0, _vue.createVNode)(_actionBar.ActionBar, {
      "class": bem('footer')
    }, {
      default: () => [props.showCancelButton && (0, _vue.createVNode)(_actionBarButton.ActionBarButton, {
        "type": "warning",
        "text": props.cancelButtonText || t('cancel'),
        "class": bem('cancel'),
        "color": props.cancelButtonColor,
        "loading": loading.cancel,
        "onClick": onCancel
      }, null), props.showConfirmButton && (0, _vue.createVNode)(_actionBarButton.ActionBarButton, {
        "type": "danger",
        "text": props.confirmButtonText || t('confirm'),
        "class": bem('confirm'),
        "color": props.confirmButtonColor,
        "loading": loading.confirm,
        "onClick": onConfirm
      }, null)]
    });

    var renderFooter = () => {
      if (slots.footer) {
        return slots.footer();
      }

      return props.theme === 'round-button' ? renderRoundButtons() : renderButtons();
    };

    return () => {
      var {
        width,
        title,
        theme,
        message,
        className
      } = props;
      return (0, _vue.createVNode)(_popup.Popup, (0, _vue.mergeProps)({
        "role": "dialog",
        "class": [bem([theme]), className],
        "style": {
          width: (0, _utils.addUnit)(width)
        },
        "aria-labelledby": title || message,
        "onUpdate:show": updateShow
      }, (0, _utils.pick)(props, popupInheritKeys)), {
        default: () => [renderTitle(), renderContent(), renderFooter()]
      });
    };
  }

});

exports.default = _default;