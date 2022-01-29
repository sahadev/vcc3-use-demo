"use strict";

exports.__esModule = true;
exports.useId = useId;

var _vue = require("vue");

var current = 0;

function useId() {
  var vm = (0, _vue.getCurrentInstance)();
  var {
    name = 'unknown'
  } = (vm == null ? void 0 : vm.type) || {}; // keep jest snapshot stable

  if (process.env.NODE_ENV === 'test') {
    return name;
  }

  return name + "-" + ++current;
}