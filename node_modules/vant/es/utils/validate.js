import { inBrowser } from './basic';
export var isDef = val => val !== undefined && val !== null; // eslint-disable-next-line @typescript-eslint/ban-types

export var isFunction = val => typeof val === 'function';
export var isObject = val => val !== null && typeof val === 'object';
export var isPromise = val => isObject(val) && isFunction(val.then) && isFunction(val.catch);
export var isDate = val => Object.prototype.toString.call(val) === '[object Date]' && !Number.isNaN(val.getTime());
export function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
export var isNumeric = val => typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
export var isIOS = () => inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;