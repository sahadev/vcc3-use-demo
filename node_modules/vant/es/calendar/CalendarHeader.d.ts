declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    subtitle: StringConstructor;
    showTitle: BooleanConstructor;
    showSubtitle: BooleanConstructor;
    firstDayOfWeek: NumberConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-subtitle"[], "click-subtitle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    title?: unknown;
    subtitle?: unknown;
    showTitle?: unknown;
    showSubtitle?: unknown;
    firstDayOfWeek?: unknown;
} & {
    showTitle: boolean;
    showSubtitle: boolean;
} & {
    title?: string | undefined;
    firstDayOfWeek?: number | undefined;
    subtitle?: string | undefined;
}> & {
    "onClick-subtitle"?: ((...args: any[]) => any) | undefined;
}, {
    showTitle: boolean;
    showSubtitle: boolean;
}>;
export default _default;
