import { inBrowser } from './basic';
import { windowWidth, windowHeight } from './dom';
import { isDef, isNumeric } from './validate';
export function addUnit(value) {
  if (isDef(value)) {
    return isNumeric(value) ? value + "px" : String(value);
  }

  return undefined;
}
export function getSizeStyle(originSize) {
  if (isDef(originSize)) {
    var size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
}
export function getZIndexStyle(zIndex) {
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
  return +value * windowWidth.value / 100;
}

function convertVh(value) {
  value = value.replace(/vh/g, '');
  return +value * windowHeight.value / 100;
}

export function unitToPx(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (inBrowser) {
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
export var camelize = str => str.replace(camelizeRE, (_, c) => c.toUpperCase());
export var kebabCase = str => str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
export function padZero(num, targetLength) {
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

export var clamp = (num, min, max) => Math.min(Math.max(num, min), max);

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

export function formatNumber(value, allowDot, allowMinus) {
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

export function addNumber(num1, num2) {
  var cardinal = Math.pow(10, 10);
  return Math.round((num1 + num2) * cardinal) / cardinal;
}