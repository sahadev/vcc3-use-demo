import { ExtractPropTypes } from 'vue';
declare const navBarProps: {
    title: StringConstructor;
    fixed: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    border: {
        type: BooleanConstructor;
        default: true;
    };
    leftText: StringConstructor;
    rightText: StringConstructor;
    leftArrow: BooleanConstructor;
    placeholder: BooleanConstructor;
    safeAreaInsetTop: BooleanConstructor;
};
export declare type NavBarProps = ExtractPropTypes<typeof navBarProps>;
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    fixed: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    border: {
        type: BooleanConstructor;
        default: true;
    };
    leftText: StringConstructor;
    rightText: StringConstructor;
    leftArrow: BooleanConstructor;
    placeholder: BooleanConstructor;
    safeAreaInsetTop: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click-left" | "click-right")[], "click-left" | "click-right", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    title?: unknown;
    fixed?: unknown;
    zIndex?: unknown;
    border?: unknown;
    leftText?: unknown;
    rightText?: unknown;
    leftArrow?: unknown;
    placeholder?: unknown;
    safeAreaInsetTop?: unknown;
} & {
    fixed: boolean;
    border: boolean;
    placeholder: boolean;
    leftArrow: boolean;
    safeAreaInsetTop: boolean;
} & {
    title?: string | undefined;
    zIndex?: string | number | undefined;
    leftText?: string | undefined;
    rightText?: string | undefined;
}> & {
    "onClick-left"?: ((...args: any[]) => any) | undefined;
    "onClick-right"?: ((...args: any[]) => any) | undefined;
}, {
    fixed: boolean;
    border: boolean;
    placeholder: boolean;
    leftArrow: boolean;
    safeAreaInsetTop: boolean;
}>;
export default _default;
