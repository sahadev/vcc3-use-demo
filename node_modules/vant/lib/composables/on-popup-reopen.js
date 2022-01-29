"use strict";

exports.__esModule = true;
exports.POPUP_TOGGLE_KEY = void 0;
exports.onPopupReopen = onPopupReopen;

var _vue = require("vue");

// eslint-disable-next-line
var POPUP_TOGGLE_KEY = Symbol();
exports.POPUP_TOGGLE_KEY = POPUP_TOGGLE_KEY;

function onPopupReopen(callback) {
  var popupToggleStatus = (0, _vue.inject)(POPUP_TOGGLE_KEY, null);

  if (popupToggleStatus) {
    (0, _vue.watch)(popupToggleStatus, show => {
      if (show) {
        callback();
      }
    });
  }
}