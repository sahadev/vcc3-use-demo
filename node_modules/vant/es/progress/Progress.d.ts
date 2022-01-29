import { ExtractPropTypes } from 'vue';
declare const progressProps: {
    color: StringConstructor;
    inactive: BooleanConstructor;
    pivotText: StringConstructor;
    textColor: StringConstructor;
    showPivot: {
        type: BooleanConstructor;
        default: true;
    };
    pivotColor: StringConstructor;
    trackColor: StringConstructor;
    strokeWidth: (NumberConstructor | StringConstructor)[];
    percentage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: number | string) => boolean;
    };
};
export declare type ProgressProps = ExtractPropTypes<typeof progressProps>;
declare const _default: import("vue").DefineComponent<{
    color: StringConstructor;
    inactive: BooleanConstructor;
    pivotText: StringConstructor;
    textColor: StringConstructor;
    showPivot: {
        type: BooleanConstructor;
        default: true;
    };
    pivotColor: StringConstructor;
    trackColor: StringConstructor;
    strokeWidth: (NumberConstructor | StringConstructor)[];
    percentage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    color?: unknown;
    inactive?: unknown;
    pivotText?: unknown;
    textColor?: unknown;
    showPivot?: unknown;
    pivotColor?: unknown;
    trackColor?: unknown;
    strokeWidth?: unknown;
    percentage?: unknown;
} & {
    inactive: boolean;
    showPivot: boolean;
    percentage: string | number;
} & {
    color?: string | undefined;
    textColor?: string | undefined;
    strokeWidth?: string | number | undefined;
    pivotText?: string | undefined;
    pivotColor?: string | undefined;
    trackColor?: string | undefined;
}>, {
    inactive: boolean;
    showPivot: boolean;
    percentage: string | number;
}>;
export default _default;
