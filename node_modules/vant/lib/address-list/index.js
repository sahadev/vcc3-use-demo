"use strict";

exports.__esModule = true;
exports.default = exports.AddressList = void 0;

var _utils = require("../utils");

var _AddressList2 = _interopRequireDefault(require("./AddressList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddressList = (0, _utils.withInstall)(_AddressList2.default);
exports.AddressList = AddressList;
var _default = AddressList;
exports.default = _default;