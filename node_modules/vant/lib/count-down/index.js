"use strict";

exports.__esModule = true;
exports.default = exports.CountDown = void 0;

var _utils = require("../utils");

var _CountDown2 = _interopRequireDefault(require("./CountDown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CountDown = (0, _utils.withInstall)(_CountDown2.default);
exports.CountDown = CountDown;
var _default = CountDown;
exports.default = _default;