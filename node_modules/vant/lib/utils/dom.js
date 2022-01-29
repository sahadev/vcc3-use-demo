"use strict";

exports.__esModule = true;
exports.getElementTop = getElementTop;
exports.getRootScrollTop = getRootScrollTop;
exports.getScrollTop = getScrollTop;
exports.isHidden = isHidden;
exports.preventDefault = preventDefault;
exports.resetScroll = resetScroll;
exports.setRootScrollTop = setRootScrollTop;
exports.setScrollTop = setScrollTop;
exports.windowWidth = exports.windowHeight = exports.stopPropagation = void 0;

var _use = require("@vant/use");

var _vue = require("vue");

var _validate = require("./validate");

function getScrollTop(el) {
  var top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset; // iOS scroll bounce cause minus scrollTop

  return Math.max(top, 0);
}

function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}

function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top or scroller top


function getElementTop(el, scroller) {
  if (el === window) {
    return 0;
  }

  var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return (0, _use.useRect)(el).top + scrollTop;
}

var isIOS = (0, _validate.isIOS)(); // hack for iOS12 page scroll
// see: https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800

function resetScroll() {
  if (isIOS) {
    setRootScrollTop(getRootScrollTop());
  }
}

var stopPropagation = event => event.stopPropagation();

exports.stopPropagation = stopPropagation;

function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

function isHidden(elementRef) {
  var el = (0, _vue.unref)(elementRef);

  if (!el) {
    return false;
  }

  var style = window.getComputedStyle(el);
  var hidden = style.display === 'none'; // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed

  var parentHidden = el.offsetParent === null && style.position !== 'fixed';
  return hidden || parentHidden;
}

var {
  width: windowWidth,
  height: windowHeight
} = (0, _use.useWindowSize)();
exports.windowHeight = windowHeight;
exports.windowWidth = windowWidth;