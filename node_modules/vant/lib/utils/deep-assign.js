"use strict";

exports.__esModule = true;
exports.deepAssign = deepAssign;

var _validate = require("./validate");

var {
  hasOwnProperty
} = Object.prototype;

function assignKey(to, from, key) {
  var val = from[key];

  if (!(0, _validate.isDef)(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !(0, _validate.isObject)(val)) {
    to[key] = val;
  } else {
    // eslint-disable-next-line no-use-before-define
    to[key] = deepAssign(Object(to[key]), val);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(key => {
    assignKey(to, from, key);
  });
  return to;
}