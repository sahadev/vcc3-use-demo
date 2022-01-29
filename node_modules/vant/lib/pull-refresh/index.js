"use strict";

exports.__esModule = true;
exports.default = exports.PullRefresh = void 0;

var _utils = require("../utils");

var _PullRefresh2 = _interopRequireDefault(require("./PullRefresh"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PullRefresh = (0, _utils.withInstall)(_PullRefresh2.default);
exports.PullRefresh = PullRefresh;
var _default = PullRefresh;
exports.default = _default;