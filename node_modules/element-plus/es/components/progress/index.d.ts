export declare const ElProgress: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly type: import("../../utils/props").BuildPropReturn<StringConstructor, "line", unknown, "circle" | "line" | "dashboard", unknown>;
    readonly percentage: import("../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly status: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "exception", unknown>;
    readonly indeterminate: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly duration: import("../../utils/props").BuildPropReturn<NumberConstructor, 3, unknown, unknown, unknown>;
    readonly strokeWidth: import("../../utils/props").BuildPropReturn<NumberConstructor, 6, unknown, unknown, unknown>;
    readonly strokeLinecap: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<"round" | "inherit" | "butt" | "square">, "round", unknown, unknown, unknown>;
    readonly textInside: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly width: import("../../utils/props").BuildPropReturn<NumberConstructor, 126, unknown, unknown, unknown>;
    readonly showText: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly color: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | ((percentage: number) => string) | {
        color: string;
        percentage: number;
    }[]>, "", unknown, unknown, unknown>;
    readonly format: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<(percentage: number) => string>, (percentage: number) => string, unknown, unknown, unknown>;
}, {
    barStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    relativeStrokeWidth: import("vue").ComputedRef<string>;
    radius: import("vue").ComputedRef<number>;
    trackPath: import("vue").ComputedRef<string>;
    perimeter: import("vue").ComputedRef<number>;
    rate: import("vue").ComputedRef<1 | 0.75>;
    strokeDashoffset: import("vue").ComputedRef<string>;
    trailPathStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    circlePathStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    stroke: import("vue").ComputedRef<string>;
    statusIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>>;
    progressTextSize: import("vue").ComputedRef<number>;
    content: import("vue").ComputedRef<string>;
    slotData: import("vue").ComputedRef<{
        percentage: number;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly type?: unknown;
    readonly percentage?: unknown;
    readonly status?: unknown;
    readonly indeterminate?: unknown;
    readonly duration?: unknown;
    readonly strokeWidth?: unknown;
    readonly strokeLinecap?: unknown;
    readonly textInside?: unknown;
    readonly width?: unknown;
    readonly showText?: unknown;
    readonly color?: unknown;
    readonly format?: unknown;
} & {
    type: import("../../utils/props").BuildPropType<StringConstructor, "circle" | "line" | "dashboard", unknown>;
    color: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | ((percentage: number) => string) | {
        color: string;
        percentage: number;
    }[]>, unknown, unknown>;
    width: number;
    strokeLinecap: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<"round" | "inherit" | "butt" | "square">, unknown, unknown>;
    strokeWidth: number;
    indeterminate: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    format: (percentage: number) => string;
    percentage: number;
    status: import("../../utils/props").BuildPropType<StringConstructor, "" | "success" | "warning" | "exception", unknown>;
    duration: number;
    textInside: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showText: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
} & {}>, {
    type: import("../../utils/props").BuildPropType<StringConstructor, "circle" | "line" | "dashboard", unknown>;
    color: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | ((percentage: number) => string) | {
        color: string;
        percentage: number;
    }[]>, unknown, unknown>;
    width: number;
    strokeLinecap: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<"round" | "inherit" | "butt" | "square">, unknown, unknown>;
    strokeWidth: number;
    indeterminate: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    format: (percentage: number) => string;
    percentage: number;
    status: import("../../utils/props").BuildPropType<StringConstructor, "" | "success" | "warning" | "exception", unknown>;
    duration: number;
    textInside: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showText: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
}>> & Record<string, any>;
export default ElProgress;
export * from './src/progress';
