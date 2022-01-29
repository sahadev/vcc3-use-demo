import { PropType, CSSProperties, ExtractPropTypes } from 'vue';
declare const tabProps: {
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    title: StringConstructor;
    disabled: BooleanConstructor;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | CSSProperties>;
    showZeroBadge: {
        type: BooleanConstructor;
        default: true;
    };
};
export declare type TabProps = ExtractPropTypes<typeof tabProps>;
declare const _default: import("vue").DefineComponent<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    title: StringConstructor;
    disabled: BooleanConstructor;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | CSSProperties>;
    showZeroBadge: {
        type: BooleanConstructor;
        default: true;
    };
}, (() => JSX.Element | undefined) | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    to?: unknown;
    url?: unknown;
    replace?: unknown;
    dot?: unknown;
    name?: unknown;
    badge?: unknown;
    title?: unknown;
    disabled?: unknown;
    titleClass?: unknown;
    titleStyle?: unknown;
    showZeroBadge?: unknown;
} & {
    replace: boolean;
    dot: boolean;
    disabled: boolean;
    showZeroBadge: boolean;
} & {
    url?: string | undefined;
    to?: import("vue-router").RouteLocationRaw | undefined;
    name?: string | number | undefined;
    badge?: string | number | undefined;
    title?: string | undefined;
    titleClass?: unknown;
    titleStyle?: string | CSSProperties | undefined;
}>, {
    replace: boolean;
    dot: boolean;
    disabled: boolean;
    showZeroBadge: boolean;
}>;
export default _default;
