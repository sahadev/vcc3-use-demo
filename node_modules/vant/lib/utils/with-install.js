"use strict";

exports.__esModule = true;
exports.withInstall = withInstall;

var _format = require("./format");

function withInstall(options) {
  options.install = app => {
    var {
      name
    } = options;
    app.component(name, options);
    app.component((0, _format.camelize)("-" + name), options);
  };

  return options;
}