"use strict";

exports.__esModule = true;
exports.default = exports.ActionSheet = void 0;

var _utils = require("../utils");

var _ActionSheet2 = _interopRequireDefault(require("./ActionSheet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionSheet = (0, _utils.withInstall)(_ActionSheet2.default);
exports.ActionSheet = ActionSheet;
var _default = ActionSheet;
exports.default = _default;