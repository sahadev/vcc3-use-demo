"use strict";

exports.__esModule = true;
exports.useExpose = useExpose;

var _vue = require("vue");

var _utils = require("../utils");

// expose public api
function useExpose(apis) {
  var instance = (0, _vue.getCurrentInstance)();

  if (instance) {
    (0, _utils.extend)(instance.proxy, apis);
  }
}