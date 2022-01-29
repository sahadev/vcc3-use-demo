"use strict";

exports.__esModule = true;
exports.default = exports.ConfigProvider = void 0;

var _utils = require("../utils");

var _ConfigProvider2 = _interopRequireDefault(require("./ConfigProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfigProvider = (0, _utils.withInstall)(_ConfigProvider2.default);
exports.ConfigProvider = ConfigProvider;
var _default = ConfigProvider;
exports.default = _default;