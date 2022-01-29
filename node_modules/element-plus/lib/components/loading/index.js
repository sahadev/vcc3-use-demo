'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var service = require('./src/service.js');
var directive = require('./src/directive.js');
require('./src/types.js');

const ElLoading = {
  install(app) {
    app.directive("loading", directive.vLoading);
    app.config.globalProperties.$loading = service.Loading;
  },
  directive: directive.vLoading,
  service: service.Loading
};
const ElLoadingDirective = directive.vLoading;
const ElLoadingService = service.Loading;

exports.ElLoading = ElLoading;
exports.ElLoadingDirective = ElLoadingDirective;
exports.ElLoadingService = ElLoadingService;
exports["default"] = ElLoading;
//# sourceMappingURL=index.js.map
