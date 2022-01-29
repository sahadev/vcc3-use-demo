export declare const SubmitBar: import("../utils").WithInstall<import("vue").DefineComponent<{
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    textAlign: import("vue").PropType<import("./SubmitBar").SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: import("vue").PropType<import("..").ButtonType>;
        default: import("..").ButtonType;
    };
    buttonColor: StringConstructor;
    suffixLabel: StringConstructor;
    decimalLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    tip?: unknown;
    label?: unknown;
    price?: unknown;
    tipIcon?: unknown;
    loading?: unknown;
    currency?: unknown;
    disabled?: unknown;
    textAlign?: unknown;
    buttonText?: unknown;
    buttonType?: unknown;
    buttonColor?: unknown;
    suffixLabel?: unknown;
    decimalLength?: unknown;
    safeAreaInsetBottom?: unknown;
} & {
    disabled: boolean;
    safeAreaInsetBottom: boolean;
    loading: boolean;
    currency: string;
    decimalLength: string | number;
    buttonType: import("..").ButtonType;
} & {
    label?: string | undefined;
    price?: number | undefined;
    textAlign?: import("./SubmitBar").SubmitBarTextAlign | undefined;
    tip?: string | undefined;
    tipIcon?: string | undefined;
    buttonText?: string | undefined;
    buttonColor?: string | undefined;
    suffixLabel?: string | undefined;
}> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    safeAreaInsetBottom: boolean;
    loading: boolean;
    currency: string;
    decimalLength: string | number;
    buttonType: import("..").ButtonType;
}>>;
export default SubmitBar;
export type { SubmitBarProps, SubmitBarTextAlign } from './SubmitBar';
