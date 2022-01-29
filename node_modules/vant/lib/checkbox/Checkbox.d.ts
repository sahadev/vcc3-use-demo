import { ExtractPropTypes } from 'vue';
declare const checkboxProps: {
    name: import("vue").PropType<unknown>;
    shape: {
        type: import("vue").PropType<import("./Checker").CheckerShape>;
        default: import("./Checker").CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<import("./Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    bindGroup: {
        type: BooleanConstructor;
        default: true;
    };
};
export declare type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
declare const _default: import("vue").DefineComponent<{
    name: import("vue").PropType<unknown>;
    shape: {
        type: import("vue").PropType<import("./Checker").CheckerShape>;
        default: import("./Checker").CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<import("./Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    bindGroup: {
        type: BooleanConstructor;
        default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    name?: unknown;
    shape?: unknown;
    disabled?: unknown;
    iconSize?: unknown;
    modelValue?: unknown;
    checkedColor?: unknown;
    labelPosition?: unknown;
    labelDisabled?: unknown;
    bindGroup?: unknown;
} & {
    disabled: boolean;
    shape: import("./Checker").CheckerShape;
    labelDisabled: boolean;
    bindGroup: boolean;
} & {
    name?: unknown;
    modelValue?: unknown;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    labelPosition?: import("./Checker").CheckerLabelPosition | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    shape: import("./Checker").CheckerShape;
    labelDisabled: boolean;
    bindGroup: boolean;
}>;
export default _default;
