"use strict";

exports.__esModule = true;
exports.default = exports.CouponList = void 0;

var _utils = require("../utils");

var _CouponList2 = _interopRequireDefault(require("./CouponList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CouponList = (0, _utils.withInstall)(_CouponList2.default);
exports.CouponList = CouponList;
var _default = CouponList;
exports.default = _default;