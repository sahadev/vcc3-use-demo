"use strict";

exports.__esModule = true;
exports.isIOS = exports.isFunction = exports.isDef = exports.isDate = void 0;
exports.isMobile = isMobile;
exports.isPromise = exports.isObject = exports.isNumeric = void 0;

var _basic = require("./basic");

var isDef = val => val !== undefined && val !== null; // eslint-disable-next-line @typescript-eslint/ban-types


exports.isDef = isDef;

var isFunction = val => typeof val === 'function';

exports.isFunction = isFunction;

var isObject = val => val !== null && typeof val === 'object';

exports.isObject = isObject;

var isPromise = val => isObject(val) && isFunction(val.then) && isFunction(val.catch);

exports.isPromise = isPromise;

var isDate = val => Object.prototype.toString.call(val) === '[object Date]' && !Number.isNaN(val.getTime());

exports.isDate = isDate;

function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}

var isNumeric = val => typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);

exports.isNumeric = isNumeric;

var isIOS = () => _basic.inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;

exports.isIOS = isIOS;