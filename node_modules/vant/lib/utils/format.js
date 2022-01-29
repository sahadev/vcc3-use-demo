"use strict";

exports.__esModule = true;
exports.addNumber = addNumber;
exports.addUnit = addUnit;
exports.clamp = exports.camelize = void 0;
exports.formatNumber = formatNumber;
exports.getSizeStyle = getSizeStyle;
exports.getZIndexStyle = getZIndexStyle;
exports.kebabCase = void 0;
exports.padZero = padZero;
exports.unitToPx = unitToPx;

var _basic = require("./basic");

var _dom = require("./dom");

var _validate = require("./validate");

function addUnit(value) {
  if ((0, _validate.isDef)(value)) {
    return (0, _validate.isNumeric)(value) ? value + "px" : String(value);
  }

  return undefined;
}

function getSizeStyle(originSize) {
  if ((0, _validate.isDef)(originSize)) {
    var size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
}

function getZIndexStyle(zIndex) {
  var style = {};

  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }

  return style;
} // cache


var rootFontSize;

function getRootFontSize() {
  if (!rootFontSize) {
    var doc = document.documentElement;
    var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value) {
  value = value.replace(/vw/g, '');
  return +value * _dom.windowWidth.value / 100;
}

function convertVh(value) {
  value = value.replace(/vh/g, '');
  return +value * _dom.windowHeight.value / 100;
}

function unitToPx(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (_basic.inBrowser) {
    if (value.includes('rem')) {
      return convertRem(value);
    }

    if (value.includes('vw')) {
      return convertVw(value);
    }

    if (value.includes('vh')) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}

var camelizeRE = /-(\w)/g;

var camelize = str => str.replace(camelizeRE, (_, c) => c.toUpperCase());

exports.camelize = camelize;

var kebabCase = str => str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');

exports.kebabCase = kebabCase;

function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}
/** clamps number within the inclusive lower and upper bounds */


var clamp = (num, min, max) => Math.min(Math.max(num, min), max);

exports.clamp = clamp;

function trimExtraChar(value, char, regExp) {
  var index = value.indexOf(char);

  if (index === -1) {
    return value;
  }

  if (char === '-' && index !== 0) {
    return value.slice(0, index);
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}

function formatNumber(value, allowDot, allowMinus) {
  if (allowDot === void 0) {
    allowDot = true;
  }

  if (allowMinus === void 0) {
    allowMinus = true;
  }

  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g);
  } else {
    value = value.replace(/-/, '');
  }

  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, '');
} // add num and avoid float number


function addNumber(num1, num2) {
  var cardinal = Math.pow(10, 10);
  return Math.round((num1 + num2) * cardinal) / cardinal;
}