"use strict";

exports.__esModule = true;
exports.Notify = Notify;

var _vue = require("vue");

var _utils = require("../utils");

var _mountComponent = require("../utils/mount-component");

var _Notify = _interopRequireDefault(require("./Notify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timer;
var instance;

var parseOptions = message => (0, _utils.isObject)(message) ? message : {
  message
};

function initInstance() {
  ({
    instance
  } = (0, _mountComponent.mountComponent)({
    setup() {
      var {
        state,
        toggle
      } = (0, _mountComponent.usePopupState)();
      return () => (0, _vue.createVNode)(_Notify.default, (0, _vue.mergeProps)(state, {
        "onUpdate:show": toggle
      }), null);
    }

  }));
}

function Notify(options) {
  if (!_utils.inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = (0, _utils.extend)({}, Notify.currentOptions, parseOptions(options));
  instance.open(options);
  clearTimeout(timer);

  if (options.duration > 0) {
    timer = window.setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

var getDefaultOptions = () => ({
  type: 'danger',
  color: undefined,
  message: '',
  onClose: undefined,
  onClick: undefined,
  onOpened: undefined,
  duration: 3000,
  className: '',
  lockScroll: false,
  background: undefined
});

Notify.clear = () => {
  if (instance) {
    instance.toggle(false);
  }
};

Notify.currentOptions = getDefaultOptions();

Notify.setDefaultOptions = options => {
  (0, _utils.extend)(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = () => {
  Notify.currentOptions = getDefaultOptions();
};

Notify.Component = (0, _utils.withInstall)(_Notify.default);

Notify.install = app => {
  app.use(Notify.Component);
  app.config.globalProperties.$notify = Notify;
};