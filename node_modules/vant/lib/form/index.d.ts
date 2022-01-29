import { FormProps } from './Form';
export declare const Form: import("../utils").WithInstall<import("vue").DefineComponent<{
    colon: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    showError: BooleanConstructor;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelAlign: import("vue").PropType<import("..").FieldTextAlign>;
    inputAlign: import("vue").PropType<import("..").FieldTextAlign>;
    scrollToError: BooleanConstructor;
    validateFirst: BooleanConstructor;
    submitOnEnter: {
        type: BooleanConstructor;
        default: true;
    };
    validateTrigger: {
        type: import("vue").PropType<import("..").FieldValidateTrigger>;
        default: import("..").FieldValidateTrigger;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: true;
    };
    errorMessageAlign: import("vue").PropType<import("..").FieldTextAlign>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "failed")[], "submit" | "failed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    colon?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    showError?: unknown;
    labelWidth?: unknown;
    labelAlign?: unknown;
    inputAlign?: unknown;
    scrollToError?: unknown;
    validateFirst?: unknown;
    submitOnEnter?: unknown;
    validateTrigger?: unknown;
    showErrorMessage?: unknown;
    errorMessageAlign?: unknown;
} & {
    disabled: boolean;
    readonly: boolean;
    colon: boolean;
    showError: boolean;
    scrollToError: boolean;
    validateFirst: boolean;
    submitOnEnter: boolean;
    validateTrigger: import("..").FieldValidateTrigger;
    showErrorMessage: boolean;
} & {
    inputAlign?: import("..").FieldTextAlign | undefined;
    labelWidth?: string | number | undefined;
    labelAlign?: import("..").FieldTextAlign | undefined;
    errorMessageAlign?: import("..").FieldTextAlign | undefined;
}> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
    onFailed?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
    colon: boolean;
    showError: boolean;
    scrollToError: boolean;
    validateFirst: boolean;
    submitOnEnter: boolean;
    validateTrigger: import("..").FieldValidateTrigger;
    showErrorMessage: boolean;
}>>;
export default Form;
export type { FormProps };
export type { FormInstance } from './types';
