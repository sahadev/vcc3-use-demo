export declare const TabbarItem: import("../utils").WithInstall<import("vue").DefineComponent<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    icon: StringConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    iconPrefix: StringConstructor;
}, (() => JSX.Element) | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    to?: unknown;
    url?: unknown;
    replace?: unknown;
    dot?: unknown;
    icon?: unknown;
    name?: unknown;
    badge?: unknown;
    iconPrefix?: unknown;
} & {
    replace: boolean;
    dot: boolean;
} & {
    url?: string | undefined;
    to?: import("vue-router").RouteLocationRaw | undefined;
    name?: string | number | undefined;
    badge?: string | number | undefined;
    iconPrefix?: string | undefined;
    icon?: string | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    replace: boolean;
    dot: boolean;
}>>;
export default TabbarItem;
export type { TabbarItemProps } from './TabbarItem';
