import { PropType, ExtractPropTypes } from 'vue';
import { ButtonType } from '../button';
declare const actionBarButtonProps: {
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    type: PropType<ButtonType>;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
};
export declare type ActionBarButtonProps = ExtractPropTypes<typeof actionBarButtonProps>;
declare const _default: import("vue").DefineComponent<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    type: PropType<ButtonType>;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    to?: unknown;
    url?: unknown;
    replace?: unknown;
    type?: unknown;
    text?: unknown;
    icon?: unknown;
    color?: unknown;
    loading?: unknown;
    disabled?: unknown;
} & {
    replace: boolean;
    disabled: boolean;
    loading: boolean;
} & {
    text?: string | undefined;
    type?: ButtonType | undefined;
    url?: string | undefined;
    to?: import("vue-router").RouteLocationRaw | undefined;
    color?: string | undefined;
    icon?: string | undefined;
}>, {
    replace: boolean;
    disabled: boolean;
    loading: boolean;
}>;
export default _default;
