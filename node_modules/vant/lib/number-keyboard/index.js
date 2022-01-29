"use strict";

exports.__esModule = true;
exports.default = exports.NumberKeyboard = void 0;

var _utils = require("../utils");

var _NumberKeyboard2 = _interopRequireDefault(require("./NumberKeyboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberKeyboard = (0, _utils.withInstall)(_NumberKeyboard2.default);
exports.NumberKeyboard = NumberKeyboard;
var _default = NumberKeyboard;
exports.default = _default;