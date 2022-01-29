"use strict";

exports.__esModule = true;
exports.default = exports.Swipe = void 0;

var _utils = require("../utils");

var _Swipe2 = _interopRequireDefault(require("./Swipe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swipe = (0, _utils.withInstall)(_Swipe2.default);
exports.Swipe = Swipe;
var _default = Swipe;
exports.default = _default;