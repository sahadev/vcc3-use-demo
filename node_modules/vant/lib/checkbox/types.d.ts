import type { ComponentPublicInstance, ComputedRef } from 'vue';
import type { CheckboxProps } from './Checkbox';
import type { CheckerShape, CheckerLabelPosition } from './Checker';
export declare type CheckboxShape = CheckerShape;
export declare type CheckboxLabelPosition = CheckerLabelPosition;
export declare type CheckboxExpose = {
    toggle: (newValue?: boolean) => void;
    /** @private */
    props: CheckboxProps;
    /** @private */
    checked: ComputedRef<boolean>;
};
export declare type CheckboxInstance = ComponentPublicInstance<CheckboxProps, CheckboxExpose>;
