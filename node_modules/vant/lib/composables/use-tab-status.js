"use strict";

exports.__esModule = true;
exports.useTabStatus = exports.TAB_STATUS_KEY = void 0;

var _vue = require("vue");

// eslint-disable-next-line
var TAB_STATUS_KEY = Symbol();
exports.TAB_STATUS_KEY = TAB_STATUS_KEY;

var useTabStatus = () => (0, _vue.inject)(TAB_STATUS_KEY, null);

exports.useTabStatus = useTabStatus;