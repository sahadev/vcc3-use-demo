import { isClient } from '@vueuse/core';

let rAF = (fn) => setTimeout(fn, 16);
let cAF = (handle) => clearTimeout(handle);
if (isClient) {
  rAF = (fn) => window.requestAnimationFrame(fn);
  cAF = (handle) => window.cancelAnimationFrame(handle);
}

export { cAF, rAF };
//# sourceMappingURL=raf.mjs.map
