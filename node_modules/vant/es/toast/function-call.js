import { createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
import { ref, getCurrentInstance, watch } from 'vue';
import { extend, isObject, inBrowser, withInstall } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import VanToast from './Toast';
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
var currentOptions = extend({}, defaultOptions); // default options of specific type

var defaultOptionsMap = new Map();

function parseOptions(message) {
  if (isObject(message)) {
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
  } = mountComponent({
    setup() {
      var message = ref('');
      var {
        open,
        state,
        close,
        toggle
      } = usePopupState();

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
        return _createVNode(VanToast, _mergeProps(state, attrs), null);
      }; // support dynamic modification of message


      watch(message, val => {
        state.message = val;
      }); // rewrite render function

      getCurrentInstance().render = render;
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

  if (!inBrowser) {
    return {};
  }

  var toast = getInstance();
  var parsedOptions = parseOptions(options);
  toast.open(extend({}, currentOptions, defaultOptionsMap.get(parsedOptions.type || currentOptions.type), parsedOptions));
  return toast;
}

var createMethod = type => options => Toast(extend({
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
    extend(currentOptions, type);
  }
}

Toast.setDefaultOptions = setDefaultOptions;

Toast.resetDefaultOptions = type => {
  if (typeof type === 'string') {
    defaultOptionsMap.delete(type);
  } else {
    currentOptions = extend({}, defaultOptions);
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
  app.use(withInstall(VanToast));
  app.config.globalProperties.$toast = Toast;
};

export { Toast };