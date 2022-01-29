import type { ComponentPublicInstance } from 'vue';
import type { FormProps } from './Form';
export declare type FormExpose = {
    submit: () => void;
    validate: (name?: string | string[] | undefined) => Promise<void>;
    scrollToField: (name: string, options?: boolean | ScrollIntoViewOptions | undefined) => void;
    resetValidation: (name?: string | string[] | undefined) => void;
};
export declare type FormProvide = {
    props: FormProps;
};
export declare type FormInstance = ComponentPublicInstance<FormProps, FormExpose>;
