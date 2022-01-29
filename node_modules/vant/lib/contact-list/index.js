"use strict";

exports.__esModule = true;
exports.default = exports.ContactList = void 0;

var _utils = require("../utils");

var _ContactList2 = _interopRequireDefault(require("./ContactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactList = (0, _utils.withInstall)(_ContactList2.default);
exports.ContactList = ContactList;
var _default = ContactList;
exports.default = _default;