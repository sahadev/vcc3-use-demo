export declare const Rate: import("../utils").WithInstall<import("vue").DefineComponent<{
    size: (NumberConstructor | StringConstructor)[];
    icon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    color: StringConstructor;
    count: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    readonly: BooleanConstructor;
    disabled: BooleanConstructor;
    voidIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    allowHalf: BooleanConstructor;
    voidColor: StringConstructor;
    touchable: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    disabledColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    size?: unknown;
    icon?: unknown;
    color?: unknown;
    count?: unknown;
    gutter?: unknown;
    readonly?: unknown;
    disabled?: unknown;
    voidIcon?: unknown;
    allowHalf?: unknown;
    voidColor?: unknown;
    touchable?: unknown;
    iconPrefix?: unknown;
    modelValue?: unknown;
    disabledColor?: unknown;
} & {
    disabled: boolean;
    icon: string;
    modelValue: number;
    readonly: boolean;
    touchable: boolean;
    count: string | number;
    voidIcon: string;
    allowHalf: boolean;
} & {
    color?: string | undefined;
    iconPrefix?: string | undefined;
    size?: string | number | undefined;
    gutter?: string | number | undefined;
    voidColor?: string | undefined;
    disabledColor?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    icon: string;
    modelValue: number;
    readonly: boolean;
    touchable: boolean;
    count: string | number;
    voidIcon: string;
    allowHalf: boolean;
}>>;
export default Rate;
export type { RateProps } from './Rate';
