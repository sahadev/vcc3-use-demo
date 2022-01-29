import { PropType, ExtractPropTypes } from 'vue';
import type { FieldRule, FieldType, FieldTextAlign, FieldClearTrigger, FieldFormatTrigger, FieldAutosizeConfig } from './types';
export declare const fieldSharedProps: {
    id: StringConstructor;
    name: StringConstructor;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    formatter: PropType<(value: string) => string>;
    clearIcon: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputAlign: PropType<FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    errorMessage: StringConstructor;
    clearTrigger: {
        type: PropType<FieldClearTrigger>;
        default: FieldClearTrigger;
    };
    formatTrigger: {
        type: PropType<FieldFormatTrigger>;
        default: FieldFormatTrigger;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
};
declare const fieldProps: {
    icon: StringConstructor;
    size: PropType<import("../cell").CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    required: BooleanConstructor;
    iconPrefix: StringConstructor;
    valueClass: PropType<unknown>;
    labelClass: PropType<unknown>;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | import("vue").CSSProperties>;
    arrowDirection: PropType<import("../cell").CellArrowDirection>;
    clickable: {
        type: PropType<boolean | null>;
        default: null;
    };
} & {
    id: StringConstructor;
    name: StringConstructor;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    formatter: PropType<(value: string) => string>;
    clearIcon: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputAlign: PropType<FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    errorMessage: StringConstructor;
    clearTrigger: {
        type: PropType<FieldClearTrigger>;
        default: FieldClearTrigger;
    };
    formatTrigger: {
        type: PropType<FieldFormatTrigger>;
        default: FieldFormatTrigger;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
} & {
    rows: (NumberConstructor | StringConstructor)[];
    type: {
        type: PropType<FieldType>;
        default: FieldType;
    };
    rules: PropType<FieldRule[]>;
    autosize: PropType<boolean | FieldAutosizeConfig>;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelClass: PropType<unknown>;
    labelAlign: PropType<FieldTextAlign>;
    showWordLimit: BooleanConstructor;
    errorMessageAlign: PropType<FieldTextAlign>;
    colon: {
        type: BooleanConstructor;
        default: null;
    };
};
export declare type FieldProps = ExtractPropTypes<typeof fieldProps>;
declare const _default: import("vue").DefineComponent<{
    icon: StringConstructor;
    size: PropType<import("../cell").CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    required: BooleanConstructor;
    iconPrefix: StringConstructor;
    valueClass: PropType<unknown>;
    labelClass: PropType<unknown>;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | import("vue").CSSProperties>;
    arrowDirection: PropType<import("../cell").CellArrowDirection>;
    clickable: {
        type: PropType<boolean | null>;
        default: null;
    };
} & {
    id: StringConstructor;
    name: StringConstructor;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    formatter: PropType<(value: string) => string>;
    clearIcon: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputAlign: PropType<FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    errorMessage: StringConstructor;
    clearTrigger: {
        type: PropType<FieldClearTrigger>;
        default: FieldClearTrigger;
    };
    formatTrigger: {
        type: PropType<FieldFormatTrigger>;
        default: FieldFormatTrigger;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
} & {
    rows: (NumberConstructor | StringConstructor)[];
    type: {
        type: PropType<FieldType>;
        default: FieldType;
    };
    rules: PropType<FieldRule[]>;
    autosize: PropType<boolean | FieldAutosizeConfig>;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelClass: PropType<unknown>;
    labelAlign: PropType<FieldTextAlign>;
    showWordLimit: BooleanConstructor;
    errorMessageAlign: PropType<FieldTextAlign>;
    colon: {
        type: BooleanConstructor;
        default: null;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "focus" | "blur" | "keypress" | "click-input" | "click-left-icon" | "click-right-icon" | "update:modelValue")[], "clear" | "focus" | "blur" | "keypress" | "click-input" | "click-left-icon" | "click-right-icon" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    icon?: unknown;
    size?: unknown;
    title?: unknown;
    value?: unknown;
    label?: unknown;
    center?: unknown;
    isLink?: unknown;
    border?: unknown;
    required?: unknown;
    iconPrefix?: unknown;
    valueClass?: unknown;
    labelClass?: unknown;
    titleClass?: unknown;
    titleStyle?: unknown;
    arrowDirection?: unknown;
    clickable?: unknown;
    id?: unknown;
    name?: unknown;
    leftIcon?: unknown;
    rightIcon?: unknown;
    autofocus?: unknown;
    clearable?: unknown;
    maxlength?: unknown;
    formatter?: unknown;
    clearIcon?: unknown;
    modelValue?: unknown;
    inputAlign?: unknown;
    placeholder?: unknown;
    autocomplete?: unknown;
    errorMessage?: unknown;
    clearTrigger?: unknown;
    formatTrigger?: unknown;
    error?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    rows?: unknown;
    type?: unknown;
    rules?: unknown;
    autosize?: unknown;
    labelWidth?: unknown;
    labelAlign?: unknown;
    showWordLimit?: unknown;
    errorMessageAlign?: unknown;
    colon?: unknown;
} & {
    type: FieldType;
    center: boolean;
    autofocus: boolean;
    disabled: boolean;
    isLink: boolean;
    border: boolean;
    required: boolean;
    clickable: boolean | null;
    clearable: boolean;
    clearIcon: string;
    modelValue: string | number;
    clearTrigger: FieldClearTrigger;
    formatTrigger: FieldFormatTrigger;
    error: boolean;
    readonly: boolean;
    showWordLimit: boolean;
    colon: boolean;
} & {
    name?: string | undefined;
    label?: string | number | undefined;
    title?: string | number | undefined;
    iconPrefix?: string | undefined;
    autocomplete?: string | undefined;
    value?: string | number | undefined;
    icon?: string | undefined;
    size?: import("../cell").CellSize | undefined;
    id?: string | undefined;
    valueClass?: unknown;
    labelClass?: unknown;
    titleClass?: unknown;
    titleStyle?: string | import("vue").CSSProperties | undefined;
    arrowDirection?: import("../cell").CellArrowDirection | undefined;
    leftIcon?: string | undefined;
    rightIcon?: string | undefined;
    maxlength?: string | number | undefined;
    formatter?: ((value: string) => string) | undefined;
    inputAlign?: FieldTextAlign | undefined;
    placeholder?: string | undefined;
    errorMessage?: string | undefined;
    rows?: string | number | undefined;
    rules?: FieldRule[] | undefined;
    autosize?: boolean | FieldAutosizeConfig | undefined;
    labelWidth?: string | number | undefined;
    labelAlign?: FieldTextAlign | undefined;
    errorMessageAlign?: FieldTextAlign | undefined;
}> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onKeypress?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onClick-input"?: ((...args: any[]) => any) | undefined;
    "onClick-left-icon"?: ((...args: any[]) => any) | undefined;
    "onClick-right-icon"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: FieldType;
    center: boolean;
    autofocus: boolean;
    disabled: boolean;
    isLink: boolean;
    border: boolean;
    required: boolean;
    clickable: boolean | null;
    clearable: boolean;
    clearIcon: string;
    modelValue: string | number;
    clearTrigger: FieldClearTrigger;
    formatTrigger: FieldFormatTrigger;
    error: boolean;
    readonly: boolean;
    showWordLimit: boolean;
    colon: boolean;
}>;
export default _default;
