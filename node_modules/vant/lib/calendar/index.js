"use strict";

exports.__esModule = true;
exports.default = exports.Calendar = void 0;

var _utils = require("../utils");

var _Calendar2 = _interopRequireDefault(require("./Calendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calendar = (0, _utils.withInstall)(_Calendar2.default);
exports.Calendar = Calendar;
var _default = Calendar;
exports.default = _default;