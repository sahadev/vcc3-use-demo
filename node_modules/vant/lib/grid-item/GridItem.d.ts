import { ExtractPropTypes } from 'vue';
declare const gridItemProps: {
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconColor: StringConstructor;
    iconPrefix: StringConstructor;
};
export declare type GridItemProps = ExtractPropTypes<typeof gridItemProps>;
declare const _default: import("vue").DefineComponent<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconColor: StringConstructor;
    iconPrefix: StringConstructor;
}, (() => JSX.Element) | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    to?: unknown;
    url?: unknown;
    replace?: unknown;
    dot?: unknown;
    text?: unknown;
    icon?: unknown;
    badge?: unknown;
    iconColor?: unknown;
    iconPrefix?: unknown;
} & {
    replace: boolean;
    dot: boolean;
} & {
    text?: string | undefined;
    url?: string | undefined;
    to?: import("vue-router").RouteLocationRaw | undefined;
    badge?: string | number | undefined;
    iconPrefix?: string | undefined;
    icon?: string | undefined;
    iconColor?: string | undefined;
}>, {
    replace: boolean;
    dot: boolean;
}>;
export default _default;
