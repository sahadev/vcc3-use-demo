'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const inBrowser = typeof window !== "undefined";
const supportsPassive = true;
function raf(fn) {
  return inBrowser ? requestAnimationFrame(fn) : -1;
}
function cancelRaf(id) {
  if (inBrowser) {
    cancelAnimationFrame(id);
  }
}
function doubleRaf(fn) {
  raf(() => raf(fn));
}

const isWindow = (val) => val === window;
const makeDOMRect = (width, height) => ({
  top: 0,
  left: 0,
  right: width,
  bottom: height,
  width,
  height
});
const useRect = (elementOrRef) => {
  const element = vue.unref(elementOrRef);
  if (isWindow(element)) {
    const width = element.innerWidth;
    const height = element.innerHeight;
    return makeDOMRect(width, height);
  }
  if (element == null ? void 0 : element.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }
  return makeDOMRect(0, 0);
};

function useToggle(defaultValue = false) {
  const state = vue.ref(defaultValue);
  const toggle = (value = !state.value) => {
    state.value = value;
  };
  return [state, toggle];
}

function useParent(key) {
  const parent = vue.inject(key, null);
  if (parent) {
    const instance = vue.getCurrentInstance();
    const { link, unlink, internalChildren } = parent;
    link(instance);
    vue.onUnmounted(() => unlink(instance));
    const index = vue.computed(() => internalChildren.indexOf(instance));
    return {
      parent,
      index
    };
  }
  return {
    parent: null,
    index: vue.ref(-1)
  };
}

function flattenVNodes(children) {
  const result = [];
  const traverse = (children2) => {
    if (Array.isArray(children2)) {
      children2.forEach((child) => {
        var _a;
        if (vue.isVNode(child)) {
          result.push(child);
          if ((_a = child.component) == null ? void 0 : _a.subTree) {
            traverse(child.component.subTree.children);
          }
          if (child.children) {
            traverse(child.children);
          }
        }
      });
    }
  };
  traverse(children);
  return result;
}
function sortChildren(parent, publicChildren, internalChildren) {
  const vnodes = flattenVNodes(parent.subTree.children);
  internalChildren.sort((a, b) => vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode));
  const orderedPublicChildren = internalChildren.map((item) => item.proxy);
  publicChildren.sort((a, b) => {
    const indexA = orderedPublicChildren.indexOf(a);
    const indexB = orderedPublicChildren.indexOf(b);
    return indexA - indexB;
  });
}
function useChildren(key) {
  const publicChildren = vue.reactive([]);
  const internalChildren = vue.reactive([]);
  const parent = vue.getCurrentInstance();
  const linkChildren = (value) => {
    const link = (child) => {
      if (child.proxy) {
        internalChildren.push(child);
        publicChildren.push(child.proxy);
        sortChildren(parent, publicChildren, internalChildren);
      }
    };
    const unlink = (child) => {
      const index = internalChildren.indexOf(child);
      publicChildren.splice(index, 1);
      internalChildren.splice(index, 1);
    };
    vue.provide(key, Object.assign({
      link,
      unlink,
      children: publicChildren,
      internalChildren
    }, value));
  };
  return {
    children: publicChildren,
    linkChildren
  };
}

const SECOND = 1e3;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
function parseTime(time) {
  const days = Math.floor(time / DAY);
  const hours = Math.floor(time % DAY / HOUR);
  const minutes = Math.floor(time % HOUR / MINUTE);
  const seconds = Math.floor(time % MINUTE / SECOND);
  const milliseconds = Math.floor(time % SECOND);
  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  };
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1e3) === Math.floor(time2 / 1e3);
}
function useCountDown(options) {
  let rafId;
  let endTime;
  let counting;
  let deactivated;
  const remain = vue.ref(options.time);
  const current = vue.computed(() => parseTime(remain.value));
  const pause = () => {
    counting = false;
    cancelRaf(rafId);
  };
  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0);
  const setRemain = (value) => {
    var _a, _b;
    remain.value = value;
    (_a = options.onChange) == null ? void 0 : _a.call(options, current.value);
    if (value === 0) {
      pause();
      (_b = options.onFinish) == null ? void 0 : _b.call(options);
    }
  };
  const microTick = () => {
    rafId = raf(() => {
      if (counting) {
        setRemain(getCurrentRemain());
        if (remain.value > 0) {
          microTick();
        }
      }
    });
  };
  const macroTick = () => {
    rafId = raf(() => {
      if (counting) {
        const remainRemain = getCurrentRemain();
        if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
          setRemain(remainRemain);
        }
        if (remain.value > 0) {
          macroTick();
        }
      }
    });
  };
  const tick = () => {
    if (!inBrowser) {
      return;
    }
    if (options.millisecond) {
      microTick();
    } else {
      macroTick();
    }
  };
  const start = () => {
    if (!counting) {
      endTime = Date.now() + remain.value;
      counting = true;
      tick();
    }
  };
  const reset = (totalTime = options.time) => {
    pause();
    remain.value = totalTime;
  };
  vue.onBeforeUnmount(pause);
  vue.onActivated(() => {
    if (deactivated) {
      counting = true;
      deactivated = false;
      tick();
    }
  });
  vue.onDeactivated(() => {
    if (counting) {
      pause();
      deactivated = true;
    }
  });
  return {
    start,
    pause,
    reset,
    current
  };
}

function onMountedOrActivated(hook) {
  let mounted;
  vue.onMounted(() => {
    hook();
    vue.nextTick(() => {
      mounted = true;
    });
  });
  vue.onActivated(() => {
    if (mounted) {
      hook();
    }
  });
}

function useEventListener(type, listener, options = {}) {
  if (!inBrowser) {
    return;
  }
  const { target = window, passive = false, capture = false } = options;
  let attached;
  const add = (target2) => {
    const element = vue.unref(target2);
    if (element && !attached) {
      element.addEventListener(type, listener, { capture, passive });
      attached = true;
    }
  };
  const remove = (target2) => {
    const element = vue.unref(target2);
    if (element && attached) {
      element.removeEventListener(type, listener, capture);
      attached = false;
    }
  };
  vue.onUnmounted(() => remove(target));
  vue.onDeactivated(() => remove(target));
  onMountedOrActivated(() => add(target));
  if (vue.isRef(target)) {
    vue.watch(target, (val, oldVal) => {
      remove(oldVal);
      add(val);
    });
  }
}

function useClickAway(target, listener, options = {}) {
  if (!inBrowser) {
    return;
  }
  const { eventName = "click" } = options;
  const onClick = (event) => {
    const element = vue.unref(target);
    if (element && !element.contains(event.target)) {
      listener(event);
    }
  };
  useEventListener(eventName, onClick, { target: document });
}

let width;
let height;
function useWindowSize() {
  if (!width) {
    width = vue.ref(0);
    height = vue.ref(0);
    if (inBrowser) {
      const update = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      };
      update();
      window.addEventListener("resize", update, { passive: true });
      window.addEventListener("orientationchange", update, { passive: true });
    }
  }
  return { width, height };
}

const overflowScrollReg = /scroll|auto/i;
const defaultRoot = inBrowser ? window : void 0;
function isElement(node) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== "HTML" && node.tagName !== "BODY" && node.nodeType === ELEMENT_NODE_TYPE;
}
function getScrollParent(el, root = defaultRoot) {
  let node = el;
  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode;
  }
  return root;
}
function useScrollParent(el, root = defaultRoot) {
  const scrollParent = vue.ref();
  vue.onMounted(() => {
    if (el.value) {
      scrollParent.value = getScrollParent(el.value, root);
    }
  });
  return scrollParent;
}

let visibility;
function usePageVisibility() {
  if (!visibility) {
    visibility = vue.ref("visible");
    if (inBrowser) {
      const update = () => {
        visibility.value = document.hidden ? "hidden" : "visible";
      };
      update();
      window.addEventListener("visibilitychange", update);
    }
  }
  return visibility;
}

const CUSTOM_FIELD_INJECTION_KEY = Symbol("van-field");
function useCustomFieldValue(customValue) {
  const field = vue.inject(CUSTOM_FIELD_INJECTION_KEY, null);
  if (field && !field.customValue.value) {
    field.customValue.value = customValue;
    vue.watch(customValue, () => {
      field.resetValidation();
      field.validateWithTrigger("onChange");
    });
  }
}

exports.CUSTOM_FIELD_INJECTION_KEY = CUSTOM_FIELD_INJECTION_KEY;
exports.cancelRaf = cancelRaf;
exports.doubleRaf = doubleRaf;
exports.flattenVNodes = flattenVNodes;
exports.getScrollParent = getScrollParent;
exports.inBrowser = inBrowser;
exports.onMountedOrActivated = onMountedOrActivated;
exports.raf = raf;
exports.sortChildren = sortChildren;
exports.supportsPassive = supportsPassive;
exports.useChildren = useChildren;
exports.useClickAway = useClickAway;
exports.useCountDown = useCountDown;
exports.useCustomFieldValue = useCustomFieldValue;
exports.useEventListener = useEventListener;
exports.usePageVisibility = usePageVisibility;
exports.useParent = useParent;
exports.useRect = useRect;
exports.useScrollParent = useScrollParent;
exports.useToggle = useToggle;
exports.useWindowSize = useWindowSize;
