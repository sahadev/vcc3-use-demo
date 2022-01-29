"use strict";

exports.__esModule = true;
exports.createBEM = createBEM;
exports.createNamespace = createNamespace;
exports.createTranslate = createTranslate;

var _basic = require("./basic");

var _format = require("./format");

var _validate = require("./validate");

var _locale = _interopRequireDefault(require("../locale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTranslate(name) {
  var prefix = (0, _format.camelize)(name) + '.';
  return function (path) {
    var messages = _locale.default.messages();

    var message = (0, _basic.get)(messages, prefix + path) || (0, _basic.get)(messages, path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (0, _validate.isFunction)(message) ? message(...args) : message;
  };
}

function genBem(name, mods) {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return " " + name + "--" + mods;
  }

  if (Array.isArray(mods)) {
    return mods.reduce((ret, item) => ret + genBem(name, item), '');
  }

  return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? genBem(name, key) : ''), '');
}
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */


function createBEM(name) {
  return (el, mods) => {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? name + "__" + el : name;
    return "" + el + genBem(el, mods);
  };
}

function createNamespace(name) {
  var prefixedName = "van-" + name;
  return [prefixedName, createBEM(prefixedName), createTranslate(prefixedName)];
}