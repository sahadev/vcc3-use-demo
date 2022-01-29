import type { ComponentPublicInstance } from 'vue';
import type { CheckboxGroupProps } from './CheckboxGroup';
import type { CheckerParent, CheckerDirection } from '../checkbox/Checker';
export declare type CheckboxGroupDirection = CheckerDirection;
export declare type CheckboxGroupToggleAllOptions = boolean | {
    checked?: boolean;
    skipDisabled?: boolean;
};
export declare type CheckboxGroupExpose = {
    toggleAll: (options?: CheckboxGroupToggleAllOptions) => void;
};
export declare type CheckboxGroupInstance = ComponentPublicInstance<CheckboxGroupProps, CheckboxGroupExpose>;
export declare type CheckboxGroupProvide = CheckerParent & {
    props: CheckboxGroupProps;
    updateValue: (value: unknown[]) => void;
};
