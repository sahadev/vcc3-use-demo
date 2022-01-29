import { PropType, ExtractPropTypes } from 'vue';
import type { FieldTextAlign, FieldValidateTrigger } from '../field/types';
declare const formProps: {
    colon: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    showError: BooleanConstructor;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelAlign: PropType<FieldTextAlign>;
    inputAlign: PropType<FieldTextAlign>;
    scrollToError: BooleanConstructor;
    validateFirst: BooleanConstructor;
    submitOnEnter: {
        type: BooleanConstructor;
        default: true;
    };
    validateTrigger: {
        type: PropType<FieldValidateTrigger>;
        default: FieldValidateTrigger;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: true;
    };
    errorMessageAlign: PropType<FieldTextAlign>;
};
export declare type FormProps = ExtractPropTypes<typeof formProps>;
declare const _default: import("vue").DefineComponent<{
    colon: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    showError: BooleanConstructor;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelAlign: PropType<FieldTextAlign>;
    inputAlign: PropType<FieldTextAlign>;
    scrollToError: BooleanConstructor;
    validateFirst: BooleanConstructor;
    submitOnEnter: {
        type: BooleanConstructor;
        default: true;
    };
    validateTrigger: {
        type: PropType<FieldValidateTrigger>;
        default: FieldValidateTrigger;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: true;
    };
    errorMessageAlign: PropType<FieldTextAlign>;
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
    validateTrigger: FieldValidateTrigger;
    showErrorMessage: boolean;
} & {
    inputAlign?: FieldTextAlign | undefined;
    labelWidth?: string | number | undefined;
    labelAlign?: FieldTextAlign | undefined;
    errorMessageAlign?: FieldTextAlign | undefined;
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
    validateTrigger: FieldValidateTrigger;
    showErrorMessage: boolean;
}>;
export default _default;
