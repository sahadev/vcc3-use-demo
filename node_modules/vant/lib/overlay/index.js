"use strict";

exports.__esModule = true;
exports.default = exports.Overlay = void 0;

var _utils = require("../utils");

var _Overlay2 = _interopRequireDefault(require("./Overlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = (0, _utils.withInstall)(_Overlay2.default);
exports.Overlay = Overlay;
var _default = Overlay;
exports.default = _default;