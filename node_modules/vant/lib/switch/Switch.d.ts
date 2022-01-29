import { ExtractPropTypes } from 'vue';
declare const switchProps: {
    size: (NumberConstructor | StringConstructor)[];
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    modelValue: import("vue").PropType<unknown>;
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    activeValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
    inactiveValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
};
export declare type SwitchProps = ExtractPropTypes<typeof switchProps>;
declare const _default: import("vue").DefineComponent<{
    size: (NumberConstructor | StringConstructor)[];
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    modelValue: import("vue").PropType<unknown>;
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    activeValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
    inactiveValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    size?: unknown;
    loading?: unknown;
    disabled?: unknown;
    modelValue?: unknown;
    activeColor?: unknown;
    inactiveColor?: unknown;
    activeValue?: unknown;
    inactiveValue?: unknown;
} & {
    disabled: boolean;
    loading: boolean;
    activeValue: unknown;
    inactiveValue: unknown;
} & {
    size?: string | number | undefined;
    modelValue?: unknown;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    loading: boolean;
    activeValue: unknown;
    inactiveValue: unknown;
}>;
export default _default;
