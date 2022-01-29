"use strict";

exports.__esModule = true;
exports.useLazyRender = useLazyRender;

var _vue = require("vue");

function useLazyRender(show) {
  var inited = (0, _vue.ref)(false);
  (0, _vue.watch)(show, value => {
    if (value) {
      inited.value = value;
    }
  }, {
    immediate: true
  });
  return render => () => inited.value ? render() : null;
}