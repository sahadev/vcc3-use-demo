export declare const PullRefresh: import("../utils").WithInstall<import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    modelValue: BooleanConstructor;
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    successText: StringConstructor;
    pullingText: StringConstructor;
    loosingText: StringConstructor;
    loadingText: StringConstructor;
    pullDistance: (NumberConstructor | StringConstructor)[];
    successDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animationDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "refresh")[], "update:modelValue" | "refresh", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled?: unknown;
    modelValue?: unknown;
    headHeight?: unknown;
    successText?: unknown;
    pullingText?: unknown;
    loosingText?: unknown;
    loadingText?: unknown;
    pullDistance?: unknown;
    successDuration?: unknown;
    animationDuration?: unknown;
} & {
    disabled: boolean;
    modelValue: boolean;
    animationDuration: string | number;
    headHeight: string | number;
    successDuration: string | number;
} & {
    loadingText?: string | undefined;
    successText?: string | undefined;
    pullingText?: string | undefined;
    loosingText?: string | undefined;
    pullDistance?: string | number | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRefresh?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: boolean;
    animationDuration: string | number;
    headHeight: string | number;
    successDuration: string | number;
}>>;
export default PullRefresh;
export type { PullRefreshProps } from './PullRefresh';
