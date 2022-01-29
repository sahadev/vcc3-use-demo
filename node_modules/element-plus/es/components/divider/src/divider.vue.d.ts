declare const _default: import("vue").DefineComponent<{
    readonly direction: import("../../../utils/props").BuildPropReturn<StringConstructor, "horizontal", unknown, "horizontal" | "vertical", unknown>;
    readonly contentPosition: import("../../../utils/props").BuildPropReturn<StringConstructor, "center", unknown, "right" | "left" | "center", unknown>;
    readonly borderStyle: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string>, "solid", unknown, unknown, unknown>;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly direction?: unknown;
    readonly contentPosition?: unknown;
    readonly borderStyle?: unknown;
} & {
    direction: import("../../../utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    borderStyle: string;
    contentPosition: import("../../../utils/props").BuildPropType<StringConstructor, "right" | "left" | "center", unknown>;
} & {}>, {
    direction: import("../../../utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    borderStyle: string;
    contentPosition: import("../../../utils/props").BuildPropType<StringConstructor, "right" | "left" | "center", unknown>;
}>;
export default _default;
