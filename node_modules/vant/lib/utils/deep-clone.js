"use strict";

exports.__esModule = true;
exports.deepClone = deepClone;

var _validate = require("./validate");

function deepClone(obj) {
  if (!(0, _validate.isDef)(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  if ((0, _validate.isObject)(obj)) {
    var to = {};
    Object.keys(obj).forEach(key => {
      to[key] = deepClone(obj[key]);
    });
    return to;
  }

  return obj;
}