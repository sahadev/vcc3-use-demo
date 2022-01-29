import { createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
import { extend, inBrowser, withInstall } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import VanDialog from './Dialog';
var instance;

function initInstance() {
  var Wrapper = {
    setup() {
      var {
        state,
        toggle
      } = usePopupState();
      return () => _createVNode(VanDialog, _mergeProps(state, {
        "onUpdate:show": toggle
      }), null);
    }

  };
  ({
    instance
  } = mountComponent(Wrapper));
}

function Dialog(options) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }

    instance.open(extend({}, Dialog.currentOptions, options, {
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
Dialog.currentOptions = extend({}, Dialog.defaultOptions);
Dialog.alert = Dialog;

Dialog.confirm = options => Dialog(extend({
  showCancelButton: true
}, options));

Dialog.close = () => {
  if (instance) {
    instance.toggle(false);
  }
};

Dialog.setDefaultOptions = options => {
  extend(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = extend({}, Dialog.defaultOptions);
};

Dialog.Component = withInstall(VanDialog);

Dialog.install = app => {
  app.use(Dialog.Component);
  app.config.globalProperties.$dialog = Dialog;
};

export { Dialog };