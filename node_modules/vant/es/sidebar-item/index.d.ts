export declare const SidebarItem: import("../utils").WithInstall<import("vue").DefineComponent<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    title: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
}, (() => JSX.Element) | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    to?: unknown;
    url?: unknown;
    replace?: unknown;
    dot?: unknown;
    title?: unknown;
    badge?: unknown;
    disabled?: unknown;
} & {
    replace: boolean;
    dot: boolean;
    disabled: boolean;
} & {
    url?: string | undefined;
    to?: import("vue-router").RouteLocationRaw | undefined;
    badge?: string | number | undefined;
    title?: string | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    replace: boolean;
    dot: boolean;
    disabled: boolean;
}>>;
export default SidebarItem;
export type { SidebarItemProps } from './SidebarItem';
