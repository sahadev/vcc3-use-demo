import { ExtractPropTypes } from 'vue';
declare const actionBarIconProps: {
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconClass: import("vue").PropType<unknown>;
    iconPrefix: StringConstructor;
};
export declare type ActionBarIconProps = ExtractPropTypes<typeof actionBarIconProps>;
declare const _default: import("vue").DefineComponent<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconClass: import("vue").PropType<unknown>;
    iconPrefix: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    to?: unknown;
    url?: unknown;
    replace?: unknown;
    dot?: unknown;
    text?: unknown;
    icon?: unknown;
    color?: unknown;
    badge?: unknown;
    iconClass?: unknown;
    iconPrefix?: unknown;
} & {
    replace: boolean;
    dot: boolean;
} & {
    text?: string | undefined;
    url?: string | undefined;
    to?: import("vue-router").RouteLocationRaw | undefined;
    badge?: string | number | undefined;
    color?: string | undefined;
    iconPrefix?: string | undefined;
    icon?: string | undefined;
    iconClass?: unknown;
}>, {
    replace: boolean;
    dot: boolean;
}>;
export default _default;
