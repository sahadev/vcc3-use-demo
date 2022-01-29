export declare const Stepper: import("../utils").WithInstall<import("vue").DefineComponent<{
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    theme: import("vue").PropType<import("./Stepper").StepperTheme>;
    integer: BooleanConstructor;
    disabled: BooleanConstructor;
    showPlus: {
        type: BooleanConstructor;
        default: true;
    };
    showMinus: {
        type: BooleanConstructor;
        default: true;
    };
    showInput: {
        type: BooleanConstructor;
        default: true;
    };
    longPress: {
        type: BooleanConstructor;
        default: true;
    };
    allowEmpty: BooleanConstructor;
    modelValue: (NumberConstructor | StringConstructor)[];
    inputWidth: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    placeholder: StringConstructor;
    disablePlus: BooleanConstructor;
    disableMinus: BooleanConstructor;
    disableInput: BooleanConstructor;
    beforeChange: import("vue").PropType<import("../utils").Interceptor>;
    defaultValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    decimalLength: (NumberConstructor | StringConstructor)[];
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "blur" | "update:modelValue" | "change" | "plus" | "minus" | "overlimit")[], "focus" | "blur" | "update:modelValue" | "change" | "plus" | "minus" | "overlimit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    min?: unknown;
    max?: unknown;
    name?: unknown;
    step?: unknown;
    theme?: unknown;
    integer?: unknown;
    disabled?: unknown;
    showPlus?: unknown;
    showMinus?: unknown;
    showInput?: unknown;
    longPress?: unknown;
    allowEmpty?: unknown;
    modelValue?: unknown;
    inputWidth?: unknown;
    buttonSize?: unknown;
    placeholder?: unknown;
    disablePlus?: unknown;
    disableMinus?: unknown;
    disableInput?: unknown;
    beforeChange?: unknown;
    defaultValue?: unknown;
    decimalLength?: unknown;
} & {
    name: string | number;
    max: string | number;
    disabled: boolean;
    min: string | number;
    step: string | number;
    integer: boolean;
    showPlus: boolean;
    showMinus: boolean;
    showInput: boolean;
    longPress: boolean;
    allowEmpty: boolean;
    disablePlus: boolean;
    disableMinus: boolean;
    disableInput: boolean;
    defaultValue: string | number;
} & {
    modelValue?: string | number | undefined;
    placeholder?: string | undefined;
    beforeChange?: import("../utils").Interceptor | undefined;
    theme?: import("./Stepper").StepperTheme | undefined;
    buttonSize?: string | number | undefined;
    inputWidth?: string | number | undefined;
    decimalLength?: string | number | undefined;
}> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onPlus?: ((...args: any[]) => any) | undefined;
    onMinus?: ((...args: any[]) => any) | undefined;
    onOverlimit?: ((...args: any[]) => any) | undefined;
}, {
    name: string | number;
    max: string | number;
    disabled: boolean;
    min: string | number;
    step: string | number;
    integer: boolean;
    showPlus: boolean;
    showMinus: boolean;
    showInput: boolean;
    longPress: boolean;
    allowEmpty: boolean;
    disablePlus: boolean;
    disableMinus: boolean;
    disableInput: boolean;
    defaultValue: string | number;
}>>;
export default Stepper;
export type { StepperTheme, StepperProps } from './Stepper';
