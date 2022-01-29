import { PropType, InjectionKey, ExtractPropTypes } from 'vue';
import type { CheckerDirection } from '../checkbox/Checker';
import type { CheckboxGroupProvide } from './types';
declare const checkboxGroupProps: {
    max: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<CheckerDirection>;
    modelValue: {
        type: PropType<unknown[]>;
        default: () => never[];
    };
    checkedColor: StringConstructor;
};
export declare type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export declare const CHECKBOX_GROUP_KEY: InjectionKey<CheckboxGroupProvide>;
declare const _default: import("vue").DefineComponent<{
    max: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<CheckerDirection>;
    modelValue: {
        type: PropType<unknown[]>;
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
    direction?: CheckerDirection | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: unknown[];
}>;
export default _default;
