import type { InjectionKey, Ref } from 'vue';
declare type ForwardRefSetter = <T>(el: T) => void;
export declare type ForwardRefInjectionContext = {
    setForwardRef: ForwardRefSetter;
};
export declare const FORWARD_REF_INJECTION_KEY: InjectionKey<ForwardRefInjectionContext>;
export declare const useForwardRef: <T>(forwardRef: Ref<T | null>) => void;
export declare const useForwardRefDirective: (setForwardRef: ForwardRefSetter) => {
    mounted(el: any): void;
    updated(el: any): void;
    unmounted(): void;
};
export {};
