"use strict";

exports.__esModule = true;
exports.ImagePreview = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _mountComponent = require("../utils/mount-component");

var _ImagePreview = _interopRequireDefault(require("./ImagePreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance;
var defaultConfig = {
  loop: true,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onScale: undefined,
  onClose: undefined,
  onChange: undefined,
  teleport: 'body',
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  transition: undefined,
  beforeClose: undefined,
  overlayStyle: undefined,
  startPosition: 0,
  swipeDuration: 300,
  showIndicators: false,
  closeOnPopstate: true,
  closeIconPosition: 'top-right'
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

      var onClosed = () => {
        state.images = [];
      };

      return () => (0, _vue.createVNode)(_ImagePreview.default, (0, _vue.mergeProps)(state, {
        "onClosed": onClosed,
        "onUpdate:show": toggle
      }), null);
    }

  }));
}

var ImagePreview = function (options, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (!_utils.inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = Array.isArray(options) ? {
    images: options,
    startPosition
  } : options;
  instance.open((0, _utils.extend)({}, defaultConfig, options));
  return instance;
};

exports.ImagePreview = ImagePreview;
ImagePreview.Component = (0, _utils.withInstall)(_ImagePreview.default);

ImagePreview.install = app => {
  app.use(ImagePreview.Component);
};