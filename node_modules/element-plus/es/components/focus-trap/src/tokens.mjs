const FOCUS_ON_MOUNT = "focus-trap.focus-on-mount";
const FOCUS_ON_UNMOUNT = "focus-trap.focus-on-unmount";
const FOCUS_ON_MOUNT_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_MOUNT_FOCUS_EVT = "mountOnFocus";
const ON_UNMOUNT_FOCUS_EVT = "unmountOnFocus";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");

export { FOCUS_ON_MOUNT, FOCUS_ON_MOUNT_OPTS, FOCUS_ON_UNMOUNT, FOCUS_TRAP_INJECTION_KEY, ON_MOUNT_FOCUS_EVT, ON_UNMOUNT_FOCUS_EVT };
//# sourceMappingURL=tokens.mjs.map
