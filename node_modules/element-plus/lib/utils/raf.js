'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@vueuse/core');

exports.rAF = (fn) => setTimeout(fn, 16);
exports.cAF = (handle) => clearTimeout(handle);
if (core.isClient) {
  exports.rAF = (fn) => window.requestAnimationFrame(fn);
  exports.cAF = (handle) => window.cancelAnimationFrame(handle);
}
//# sourceMappingURL=raf.js.map
