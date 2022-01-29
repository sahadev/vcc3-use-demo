export declare const CheckboxGroup: import("../utils").WithInstall<import("vue").DefineComponent<{
    max: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: import("vue").PropType<import("../checkbox/Checker").CheckerDirection>;
    modelValue: {
        type: import("vue").PropType<unknown[]>;
        default: () => never[];
    };
    checkedColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    max?: unknown;
    disabled?: unknown;
    iconSize?: unknown;
    direction?: unknown;
    modelValue?: unknown;
    checkedColor?: unknown;
} & {
    disabled: boolean;
    modelValue: unknown[];
} & {
    max?: string | number | undefined;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    direction?: import("../checkbox/Checker").CheckerDirection | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: unknown[];
}>>;
export default CheckboxGroup;
export type { CheckboxGroupProps } from './CheckboxGroup';
export type { CheckboxGroupInstance, CheckboxGroupDirection, CheckboxGroupToggleAllOptions, } from './types';
