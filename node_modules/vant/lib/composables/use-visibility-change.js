"use strict";

exports.__esModule = true;
exports.useVisibilityChange = useVisibilityChange;

var _utils = require("../utils");

var _vue = require("vue");

var _use = require("@vant/use");

// @Experimental
function useVisibilityChange(target, onChange) {
  // compatibility: https://caniuse.com/#feat=intersectionobserver
  if (!_utils.inBrowser || !window.IntersectionObserver) {
    return;
  }

  var observer = new IntersectionObserver(entries => {
    // visibility changed
    onChange(entries[0].intersectionRatio > 0);
  }, {
    root: document.body
  });

  var observe = () => {
    if (target.value) {
      observer.observe(target.value);
    }
  };

  var unobserve = () => {
    if (target.value) {
      observer.unobserve(target.value);
    }
  };

  (0, _vue.onDeactivated)(unobserve);
  (0, _vue.onBeforeUnmount)(unobserve);
  (0, _use.onMountedOrActivated)(observe);
}