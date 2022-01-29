"use strict";

exports.__esModule = true;
exports.default = exports.Locale = void 0;

var _vue = require("vue");

var _deepAssign = require("../utils/deep-assign");

var _zhCN = _interopRequireDefault(require("./lang/zh-CN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lang = (0, _vue.ref)('zh-CN');
var messages = (0, _vue.reactive)({
  'zh-CN': _zhCN.default
});
var Locale = {
  messages() {
    return messages[lang.value];
  },

  use(newLang, newMessages) {
    lang.value = newLang;
    this.add({
      [newLang]: newMessages
    });
  },

  add(newMessages) {
    if (newMessages === void 0) {
      newMessages = {};
    }

    (0, _deepAssign.deepAssign)(messages, newMessages);
  }

};
exports.Locale = Locale;
var _default = Locale;
exports.default = _default;