import { createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
import { extend, isObject, inBrowser, withInstall } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import VanNotify from './Notify';
var timer;
var instance;

var parseOptions = message => isObject(message) ? message : {
  message
};

function initInstance() {
  ({
    instance
  } = mountComponent({
    setup() {
      var {
        state,
        toggle
      } = usePopupState();
      return () => _createVNode(VanNotify, _mergeProps(state, {
        "onUpdate:show": toggle
      }), null);
    }

  }));
}

function Notify(options) {
  if (!inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = extend({}, Notify.currentOptions, parseOptions(options));
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
  extend(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = () => {
  Notify.currentOptions = getDefaultOptions();
};

Notify.Component = withInstall(VanNotify);

Notify.install = app => {
  app.use(Notify.Component);
  app.config.globalProperties.$notify = Notify;
};

export { Notify };