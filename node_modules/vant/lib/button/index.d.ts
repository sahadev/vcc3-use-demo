export declare const Button: import("../utils").WithInstall<import("vue").DefineComponent<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    text: StringConstructor;
    icon: StringConstructor;
    type: {
        type: import("vue").PropType<import("./types").ButtonType>;
        default: import("./types").ButtonType;
    };
    size: {
        type: import("vue").PropType<import("./types").ButtonSize>;
        default: import("./types").ButtonSize;
    };
    color: StringConstructor;
    block: BooleanConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    square: BooleanConstructor;
    loading: BooleanConstructor;
    hairline: BooleanConstructor;
    disabled: BooleanConstructor;
    iconPrefix: StringConstructor;
    nativeType: {
        type: import("vue").PropType<import("./types").ButtonNativeType>;
        default: import("./types").ButtonNativeType;
    };
    loadingSize: (NumberConstructor | StringConstructor)[];
    loadingText: StringConstructor;
    loadingType: import("vue").PropType<import("..").LoadingType>;
    iconPosition: {
        type: import("vue").PropType<import("./types").ButtonIconPosition>;
        default: import("./types").ButtonIconPosition;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    to?: unknown;
    url?: unknown;
    replace?: unknown;
    tag?: unknown;
    text?: unknown;
    icon?: unknown;
    type?: unknown;
    size?: unknown;
    color?: unknown;
    block?: unknown;
    plain?: unknown;
    round?: unknown;
    square?: unknown;
    loading?: unknown;
    hairline?: unknown;
    disabled?: unknown;
    iconPrefix?: unknown;
    nativeType?: unknown;
    loadingSize?: unknown;
    loadingText?: unknown;
    loadingType?: unknown;
    iconPosition?: unknown;
} & {
    replace: boolean;
    type: import("./types").ButtonType;
    tag: keyof HTMLElementTagNameMap;
    round: boolean;
    disabled: boolean;
    size: import("./types").ButtonSize;
    loading: boolean;
    block: boolean;
    square: boolean;
    plain: boolean;
    hairline: boolean;
    nativeType: import("./types").ButtonNativeType;
    iconPosition: import("./types").ButtonIconPosition;
} & {
    text?: string | undefined;
    url?: string | undefined;
    to?: import("vue-router").RouteLocationRaw | undefined;
    color?: string | undefined;
    iconPrefix?: string | undefined;
    icon?: string | undefined;
    loadingSize?: string | number | undefined;
    loadingText?: string | undefined;
    loadingType?: import("..").LoadingType | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    replace: boolean;
    type: import("./types").ButtonType;
    tag: keyof HTMLElementTagNameMap;
    round: boolean;
    disabled: boolean;
    size: import("./types").ButtonSize;
    loading: boolean;
    block: boolean;
    square: boolean;
    plain: boolean;
    hairline: boolean;
    nativeType: import("./types").ButtonNativeType;
    iconPosition: import("./types").ButtonIconPosition;
}>>;
export default Button;
export type { ButtonProps } from './Button';
export type { ButtonType, ButtonSize, ButtonNativeType, ButtonIconPosition, } from './types';
