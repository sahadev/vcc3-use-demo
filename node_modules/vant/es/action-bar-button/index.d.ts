export declare const ActionBarButton: import("../utils").WithInstall<import("vue").DefineComponent<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    type: import("vue").PropType<import("..").ButtonType>;
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
    type?: import("..").ButtonType | undefined;
    url?: string | undefined;
    to?: import("vue-router").RouteLocationRaw | undefined;
    color?: string | undefined;
    icon?: string | undefined;
}>, {
    replace: boolean;
    disabled: boolean;
    loading: boolean;
}>>;
export default ActionBarButton;
export type { ActionBarButtonProps } from './ActionBarButton';
