import { ExtractPropTypes } from 'vue';
export declare const ACTION_BAR_KEY: unique symbol;
declare const actionBarProps: {
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
};
export declare type ActionBarProps = ExtractPropTypes<typeof actionBarProps>;
declare const _default: import("vue").DefineComponent<{
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    safeAreaInsetBottom?: unknown;
} & {
    safeAreaInsetBottom: boolean;
} & {}>, {
    safeAreaInsetBottom: boolean;
}>;
export default _default;
