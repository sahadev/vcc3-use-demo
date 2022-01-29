/**
 * Vue Router support
 */
import { getCurrentInstance } from 'vue';
export var routeProps = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
export function route(_ref) {
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
export function useRoute() {
  var vm = getCurrentInstance().proxy;
  return () => route(vm);
}