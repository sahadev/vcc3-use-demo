"use strict";

exports.__esModule = true;
exports.default = exports.ShareSheet = void 0;

var _utils = require("../utils");

var _ShareSheet2 = _interopRequireDefault(require("./ShareSheet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShareSheet = (0, _utils.withInstall)(_ShareSheet2.default);
exports.ShareSheet = ShareSheet;
var _default = ShareSheet;
exports.default = _default;