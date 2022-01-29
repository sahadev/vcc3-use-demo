declare const _default: import("vue").DefineComponent<{
    readonly title: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly subTitle: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly icon: import("../../../utils/props").BuildPropReturn<unknown, "info", unknown, "success" | "warning" | "info" | "error", unknown>;
}, {
    resultIcon: import("vue").ComputedRef<{
        class: "icon-success" | "icon-warning" | "icon-error" | "icon-info";
        component: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly title?: unknown;
    readonly subTitle?: unknown;
    readonly icon?: unknown;
} & {
    icon: import("../../../utils/props").BuildPropType<unknown, "success" | "warning" | "info" | "error", unknown>;
    title: string;
    subTitle: string;
} & {}>, {
    icon: import("../../../utils/props").BuildPropType<unknown, "success" | "warning" | "info" | "error", unknown>;
    title: string;
    subTitle: string;
}>;
export default _default;
