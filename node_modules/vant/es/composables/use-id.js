import { getCurrentInstance } from 'vue';
var current = 0;
export function useId() {
  var vm = getCurrentInstance();
  var {
    name = 'unknown'
  } = (vm == null ? void 0 : vm.type) || {}; // keep jest snapshot stable

  if (process.env.NODE_ENV === 'test') {
    return name;
  }

  return name + "-" + ++current;
}