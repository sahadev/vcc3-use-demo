"use strict";

exports.__esModule = true;
exports.Lazyload = void 0;

var _lazy = _interopRequireDefault(require("./lazy"));

var _lazyComponent = _interopRequireDefault(require("./lazy-component"));

var _lazyContainer = _interopRequireDefault(require("./lazy-container"));

var _lazyImage = _interopRequireDefault(require("./lazy-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a fork of [vue-lazyload](https://github.com/hilongjw/vue-lazyload) with Vue 3 support.
 */
var Lazyload = {
  /*
   * install function
   * @param  {App} app
   * @param  {object} options lazyload options
   */
  install(app, options) {
    if (options === void 0) {
      options = {};
    }

    var LazyClass = (0, _lazy.default)();
    var lazy = new LazyClass(options);
    var lazyContainer = new _lazyContainer.default({
      lazy
    });
    app.config.globalProperties.$Lazyload = lazy;

    if (options.lazyComponent) {
      app.component('LazyComponent', (0, _lazyComponent.default)(lazy));
    }

    if (options.lazyImage) {
      app.component('LazyImage', (0, _lazyImage.default)(lazy));
    }

    app.directive('lazy', {
      beforeMount: lazy.add.bind(lazy),
      updated: lazy.update.bind(lazy),
      unmounted: lazy.remove.bind(lazy)
    });
    app.directive('lazy-container', {
      beforeMount: lazyContainer.bind.bind(lazyContainer),
      updated: lazyContainer.update.bind(lazyContainer),
      unmounted: lazyContainer.unbind.bind(lazyContainer)
    });
  }

};
exports.Lazyload = Lazyload;