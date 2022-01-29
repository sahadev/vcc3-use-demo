"use strict";

exports.__esModule = true;
exports.useRefs = useRefs;

var _vue = require("vue");

function useRefs() {
  var refs = (0, _vue.ref)([]);
  (0, _vue.onBeforeUpdate)(() => {
    refs.value = [];
  });

  var setRefs = index => el => {
    refs.value[index] = el;
  };

  return [refs, setRefs];
}