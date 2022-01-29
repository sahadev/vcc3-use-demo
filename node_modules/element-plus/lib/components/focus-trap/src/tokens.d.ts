import type { InjectionKey, Ref } from 'vue';
export declare const FOCUS_ON_MOUNT = "focus-trap.focus-on-mount";
export declare const FOCUS_ON_UNMOUNT = "focus-trap.focus-on-unmount";
export declare const FOCUS_ON_MOUNT_OPTS: EventInit;
export declare const ON_MOUNT_FOCUS_EVT = "mountOnFocus";
export declare const ON_UNMOUNT_FOCUS_EVT = "unmountOnFocus";
export declare type FocusTrapInjectionContext = {
    focusTrapRef: Ref<HTMLElement | null>;
    onKeydown: (e: KeyboardEvent) => void;
};
export declare const FOCUS_TRAP_INJECTION_KEY: InjectionKey<FocusTrapInjectionContext>;
