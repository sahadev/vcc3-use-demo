import { PropType, InjectionKey, ExtractPropTypes } from 'vue';
import type { CheckerDirection } from '../checkbox/Checker';
export declare type RadioGroupDirection = CheckerDirection;
declare const radioGroupProps: {
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<CheckerDirection>;
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
};
export declare type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
export declare type RadioGroupProvide = {
    props: RadioGroupProps;
    updateValue: (value: unknown) => void;
};
export declare const RADIO_KEY: InjectionKey<RadioGroupProvide>;
declare const _default: import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<CheckerDirection>;
    modelValue: PropType<unknown>;
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
    direction?: CheckerDirection | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
}>;
export default _default;
