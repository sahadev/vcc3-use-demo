"use strict";

exports.__esModule = true;

var _basic = require("./basic");

Object.keys(_basic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _basic[key]) return;
  exports[key] = _basic[key];
});

var _props = require("./props");

Object.keys(_props).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _props[key]) return;
  exports[key] = _props[key];
});

var _dom = require("./dom");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dom[key]) return;
  exports[key] = _dom[key];
});

var _create = require("./create");

Object.keys(_create).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _create[key]) return;
  exports[key] = _create[key];
});

var _format = require("./format");

Object.keys(_format).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _format[key]) return;
  exports[key] = _format[key];
});

var _constant = require("./constant");

Object.keys(_constant).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constant[key]) return;
  exports[key] = _constant[key];
});

var _validate = require("./validate");

Object.keys(_validate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validate[key]) return;
  exports[key] = _validate[key];
});

var _interceptor = require("./interceptor");

Object.keys(_interceptor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _interceptor[key]) return;
  exports[key] = _interceptor[key];
});

var _withInstall = require("./with-install");

Object.keys(_withInstall).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _withInstall[key]) return;
  exports[key] = _withInstall[key];
});