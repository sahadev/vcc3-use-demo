import type { InjectionKey, Ref } from 'vue';
import type { Instance } from '@popperjs/core';
import type { Measurable } from './popper';
export declare type ElPopperInjectionContext = {
    triggerRef: Ref<Measurable | null>;
    contentRef: Ref<HTMLElement | null>;
    popperInstanceRef: Ref<Instance | null>;
};
export declare type ElPopperContentInjectionContext = {
    arrowRef: Ref<HTMLElement | null>;
    arrowOffset: Ref<number | undefined>;
};
export declare const POPPER_INJECTION_KEY: InjectionKey<ElPopperInjectionContext>;
export declare const POPPER_CONTENT_INJECTION_KEY: InjectionKey<ElPopperContentInjectionContext>;
