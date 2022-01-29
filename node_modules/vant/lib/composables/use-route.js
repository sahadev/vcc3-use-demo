"use strict";

exports.__esModule = true;
exports.route = route;
exports.routeProps = void 0;
exports.useRoute = useRoute;

var _vue = require("vue");

/**
 * Vue Router support
 */
var routeProps = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
exports.routeProps = routeProps;

function route(_ref) {
  var {
    to,
    url,
    replace,
    $router: router
  } = _ref;

  if (to && router) {
    router[replace ? 'replace' : 'push'](to);
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}

function useRoute() {
  var vm = (0, _vue.getCurrentInstance)().proxy;
  return () => route(vm);
}