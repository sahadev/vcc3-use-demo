"use strict";

exports.__esModule = true;
exports.default = exports.Search = void 0;

var _utils = require("../utils");

var _Search2 = _interopRequireDefault(require("./Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = (0, _utils.withInstall)(_Search2.default);
exports.Search = Search;
var _default = Search;
exports.default = _default;