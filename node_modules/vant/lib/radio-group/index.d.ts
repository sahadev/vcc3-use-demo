export declare const RadioGroup: import("../utils").WithInstall<import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: import("vue").PropType<import("../checkbox/Checker").CheckerDirection>;
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled?: unknown;
    iconSize?: unknown;
    direction?: unknown;
    modelValue?: unknown;
    checkedColor?: unknown;
} & {
    disabled: boolean;
} & {
    modelValue?: unknown;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    direction?: import("../checkbox/Checker").CheckerDirection | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
}>>;
export default RadioGroup;
export type { RadioGroupProps, RadioGroupDirection } from './RadioGroup';
