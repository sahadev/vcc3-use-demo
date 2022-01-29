"use strict";

exports.__esModule = true;
exports.default = exports.Sticky = void 0;

var _utils = require("../utils");

var _Sticky2 = _interopRequireDefault(require("./Sticky"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sticky = (0, _utils.withInstall)(_Sticky2.default);
exports.Sticky = Sticky;
var _default = Sticky;
exports.default = _default;