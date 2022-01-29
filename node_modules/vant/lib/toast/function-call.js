"use strict";

exports.__esModule = true;
exports.Toast = Toast;

var _vue = require("vue");

var _utils = require("../utils");

var _mountComponent = require("../utils/mount-component");

var _Toast = _interopRequireDefault(require("./Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  icon: '',
  type: 'text',
  message: '',
  className: '',
  overlay: false,
  onClose: undefined,
  onOpened: undefined,
  duration: 2000,
  teleport: 'body',
  iconSize: undefined,
  iconPrefix: undefined,
  position: 'middle',
  transition: 'van-fade',
  forbidClick: false,
  loadingType: undefined,
  overlayClass: '',
  overlayStyle: undefined,
  closeOnClick: false,
  closeOnClickOverlay: false
};
var queue = [];
var allowMultiple = false;
var currentOptions = (0, _utils.extend)({}, defaultOptions); // default options of specific type

var defaultOptionsMap = new Map();

function parseOptions(message) {
  if ((0, _utils.isObject)(message)) {
    return message;
  }

  return {
    message
  };
}

function createInstance() {
  var {
    instance,
    unmount
  } = (0, _mountComponent.mountComponent)({
    setup() {
      var message = (0, _vue.ref)('');
      var {
        open,
        state,
        close,
        toggle
      } = (0, _mountComponent.usePopupState)();

      var onClosed = () => {
        if (allowMultiple) {
          queue = queue.filter(item => item !== instance);
          unmount();
        }
      };

      var render = () => {
        var attrs = {
          onClosed,
          'onUpdate:show': toggle
        };
        return (0, _vue.createVNode)(_Toast.default, (0, _vue.mergeProps)(state, attrs), null);
      }; // support dynamic modification of message


      (0, _vue.watch)(message, val => {
        state.message = val;
      }); // rewrite render function

      (0, _vue.getCurrentInstance)().render = render;
      return {
        open,
        clear: close,
        message
      };
    }

  });
  return instance;
}

function getInstance() {
  if (!queue.length || allowMultiple) {
    var instance = createInstance();
    queue.push(instance);
  }

  return queue[queue.length - 1];
}

function Toast(options) {
  if (options === void 0) {
    options = {};
  }

  if (!_utils.inBrowser) {
    return {};
  }

  var toast = getInstance();
  var parsedOptions = parseOptions(options);
  toast.open((0, _utils.extend)({}, currentOptions, defaultOptionsMap.get(parsedOptions.type || currentOptions.type), parsedOptions));
  return toast;
}

var createMethod = type => options => Toast((0, _utils.extend)({
  type
}, parseOptions(options)));

Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');

Toast.clear = all => {
  if (queue.length) {
    if (all) {
      queue.forEach(toast => {
        toast.clear();
      });
      queue = [];
    } else if (!allowMultiple) {
      queue[0].clear();
    } else {
      var _queue$shift;

      (_queue$shift = queue.shift()) == null ? void 0 : _queue$shift.clear();
    }
  }
};

function setDefaultOptions(type, options) {
  if (typeof type === 'string') {
    defaultOptionsMap.set(type, options);
  } else {
    (0, _utils.extend)(currentOptions, type);
  }
}

Toast.setDefaultOptions = setDefaultOptions;

Toast.resetDefaultOptions = type => {
  if (typeof type === 'string') {
    defaultOptionsMap.delete(type);
  } else {
    currentOptions = (0, _utils.extend)({}, defaultOptions);
    defaultOptionsMap.clear();
  }
};

Toast.allowMultiple = function (value) {
  if (value === void 0) {
    value = true;
  }

  allowMultiple = value;
};

Toast.install = app => {
  app.use((0, _utils.withInstall)(_Toast.default));
  app.config.globalProperties.$toast = Toast;
};