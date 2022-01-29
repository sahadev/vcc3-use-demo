"use strict";

exports.__esModule = true;
exports.useHeight = void 0;

var _use = require("@vant/use");

var _vue = require("vue");

var useHeight = element => {
  var height = (0, _vue.ref)();
  (0, _vue.onMounted)(() => (0, _vue.nextTick)(() => {
    height.value = (0, _use.useRect)(element).height;
  }));
  return height;
};

exports.useHeight = useHeight;