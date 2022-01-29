"use strict";

exports.__esModule = true;
exports.default = exports.Uploader = void 0;

var _utils = require("../utils");

var _Uploader2 = _interopRequireDefault(require("./Uploader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Uploader = (0, _utils.withInstall)(_Uploader2.default);
exports.Uploader = Uploader;
var _default = Uploader;
exports.default = _default;