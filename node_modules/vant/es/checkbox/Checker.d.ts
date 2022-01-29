import { PropType } from 'vue';
export declare type CheckerShape = 'square' | 'round';
export declare type CheckerDirection = 'horizontal' | 'vertical';
export declare type CheckerLabelPosition = 'left' | 'right';
export declare type CheckerParent = {
    props: {
        disabled?: boolean;
        iconSize?: number | string;
        direction?: CheckerDirection;
        checkedColor?: string;
    };
};
export declare const checkerProps: {
    name: PropType<unknown>;
    shape: {
        type: PropType<CheckerShape>;
        default: CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: PropType<CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
};
declare const _default: import("vue").DefineComponent<{
    name: PropType<unknown>;
    shape: {
        type: PropType<CheckerShape>;
        default: CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: PropType<CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    bem: {
        type: FunctionConstructor;
        required: true;
    };
    role: StringConstructor;
    parent: PropType<CheckerParent | null>;
    checked: BooleanConstructor;
    bindGroup: {
        type: BooleanConstructor;
        default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "toggle")[], "click" | "toggle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    name?: unknown;
    shape?: unknown;
    disabled?: unknown;
    iconSize?: unknown;
    modelValue?: unknown;
    checkedColor?: unknown;
    labelPosition?: unknown;
    labelDisabled?: unknown;
    bem?: unknown;
    role?: unknown;
    parent?: unknown;
    checked?: unknown;
    bindGroup?: unknown;
} & {
    bem: Function;
    checked: boolean;
    disabled: boolean;
    shape: CheckerShape;
    labelDisabled: boolean;
    bindGroup: boolean;
} & {
    name?: unknown;
    role?: string | undefined;
    modelValue?: unknown;
    parent?: CheckerParent | null | undefined;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    labelPosition?: CheckerLabelPosition | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onToggle?: ((...args: any[]) => any) | undefined;
}, {
    checked: boolean;
    disabled: boolean;
    shape: CheckerShape;
    labelDisabled: boolean;
    bindGroup: boolean;
}>;
export default _default;
