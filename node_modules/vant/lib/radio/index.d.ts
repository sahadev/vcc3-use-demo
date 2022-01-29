export declare const Radio: import("../utils").WithInstall<import("vue").DefineComponent<{
    name: import("vue").PropType<unknown>;
    shape: {
        type: import("vue").PropType<import("../checkbox/Checker").CheckerShape>;
        default: import("../checkbox/Checker").CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<import("../checkbox/Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    name?: unknown;
    shape?: unknown;
    disabled?: unknown;
    iconSize?: unknown;
    modelValue?: unknown;
    checkedColor?: unknown;
    labelPosition?: unknown;
    labelDisabled?: unknown;
} & {
    disabled: boolean;
    shape: import("../checkbox/Checker").CheckerShape;
    labelDisabled: boolean;
} & {
    name?: unknown;
    modelValue?: unknown;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    labelPosition?: import("../checkbox/Checker").CheckerLabelPosition | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    shape: import("../checkbox/Checker").CheckerShape;
    labelDisabled: boolean;
}>>;
export default Radio;
export type { RadioProps, RadioShape, RadioLabelPosition } from './Radio';
