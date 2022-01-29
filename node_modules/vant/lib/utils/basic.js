"use strict";

exports.__esModule = true;
exports.extend = void 0;
exports.get = get;
exports.inBrowser = void 0;
exports.noop = noop;
exports.pick = pick;

function noop() {}

var extend = Object.assign;
exports.extend = extend;
var inBrowser = typeof window !== 'undefined'; // eslint-disable-next-line

exports.inBrowser = inBrowser;

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(key => {
    var _result$key;

    result = (_result$key = result[key]) != null ? _result$key : '';
  });
  return result;
}

function pick(obj, keys, ignoreUndefined) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== undefined) {
      ret[key] = obj[key];
    }

    return ret;
  }, {});
}