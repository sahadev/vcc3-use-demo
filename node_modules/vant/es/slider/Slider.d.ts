import { PropType, ExtractPropTypes } from 'vue';
declare type NumberRange = [number, number];
declare type SliderValue = number | NumberRange;
declare const sliderProps: {
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    range: BooleanConstructor;
    reverse: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    vertical: BooleanConstructor;
    barHeight: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    modelValue: {
        type: PropType<SliderValue>;
        default: number;
    };
};
export declare type SliderProps = ExtractPropTypes<typeof sliderProps>;
declare const _default: import("vue").DefineComponent<{
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    range: BooleanConstructor;
    reverse: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    vertical: BooleanConstructor;
    barHeight: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    modelValue: {
        type: PropType<SliderValue>;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "drag-end" | "drag-start")[], "update:modelValue" | "change" | "drag-end" | "drag-start", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    min?: unknown;
    max?: unknown;
    step?: unknown;
    range?: unknown;
    reverse?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    vertical?: unknown;
    barHeight?: unknown;
    buttonSize?: unknown;
    activeColor?: unknown;
    inactiveColor?: unknown;
    modelValue?: unknown;
} & {
    max: string | number;
    reverse: boolean;
    disabled: boolean;
    modelValue: SliderValue;
    readonly: boolean;
    vertical: boolean;
    range: boolean;
    min: string | number;
    step: string | number;
} & {
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    barHeight?: string | number | undefined;
    buttonSize?: string | number | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onDrag-end"?: ((...args: any[]) => any) | undefined;
    "onDrag-start"?: ((...args: any[]) => any) | undefined;
}, {
    max: string | number;
    reverse: boolean;
    disabled: boolean;
    modelValue: SliderValue;
    readonly: boolean;
    vertical: boolean;
    range: boolean;
    min: string | number;
    step: string | number;
}>;
export default _default;
