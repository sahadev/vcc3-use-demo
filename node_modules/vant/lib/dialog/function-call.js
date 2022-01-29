"use strict";

exports.__esModule = true;
exports.Dialog = Dialog;

var _vue = require("vue");

var _utils = require("../utils");

var _mountComponent = require("../utils/mount-component");

var _Dialog = _interopRequireDefault(require("./Dialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance;

function initInstance() {
  var Wrapper = {
    setup() {
      var {
        state,
        toggle
      } = (0, _mountComponent.usePopupState)();
      return () => (0, _vue.createVNode)(_Dialog.default, (0, _vue.mergeProps)(state, {
        "onUpdate:show": toggle
      }), null);
    }

  };
  ({
    instance
  } = (0, _mountComponent.mountComponent)(Wrapper));
}

function Dialog(options) {
  /* istanbul ignore if */
  if (!_utils.inBrowser) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }

    instance.open((0, _utils.extend)({}, Dialog.currentOptions, options, {
      callback: action => {
        (action === 'confirm' ? resolve : reject)(action);
      }
    }));
  });
}

Dialog.defaultOptions = {
  title: '',
  width: '',
  theme: null,
  message: '',
  overlay: true,
  callback: null,
  teleport: 'body',
  className: '',
  allowHtml: false,
  lockScroll: true,
  transition: undefined,
  beforeClose: null,
  overlayClass: '',
  overlayStyle: undefined,
  messageAlign: '',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: true,
  closeOnClickOverlay: false
};
Dialog.currentOptions = (0, _utils.extend)({}, Dialog.defaultOptions);
Dialog.alert = Dialog;

Dialog.confirm = options => Dialog((0, _utils.extend)({
  showCancelButton: true
}, options));

Dialog.close = () => {
  if (instance) {
    instance.toggle(false);
  }
};

Dialog.setDefaultOptions = options => {
  (0, _utils.extend)(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = (0, _utils.extend)({}, Dialog.defaultOptions);
};

Dialog.Component = (0, _utils.withInstall)(_Dialog.default);

Dialog.install = app => {
  app.use(Dialog.Component);
  app.config.globalProperties.$dialog = Dialog;
};