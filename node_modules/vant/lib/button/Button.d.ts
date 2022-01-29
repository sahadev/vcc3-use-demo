import { PropType, ExtractPropTypes } from 'vue';
import { LoadingType } from '../loading';
import { ButtonSize, ButtonType, ButtonNativeType, ButtonIconPosition } from './types';
declare const buttonProps: {
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    text: StringConstructor;
    icon: StringConstructor;
    type: {
        type: PropType<ButtonType>;
        default: ButtonType;
    };
    size: {
        type: PropType<ButtonSize>;
        default: ButtonSize;
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
        type: PropType<ButtonNativeType>;
        default: ButtonNativeType;
    };
    loadingSize: (NumberConstructor | StringConstructor)[];
    loadingText: StringConstructor;
    loadingType: PropType<LoadingType>;
    iconPosition: {
        type: PropType<ButtonIconPosition>;
        default: ButtonIconPosition;
    };
};
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
declare const _default: import("vue").DefineComponent<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    text: StringConstructor;
    icon: StringConstructor;
    type: {
        type: PropType<ButtonType>;
        default: ButtonType;
    };
    size: {
        type: PropType<ButtonSize>;
        default: ButtonSize;
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
        type: PropType<ButtonNativeType>;
        default: ButtonNativeType;
    };
    loadingSize: (NumberConstructor | StringConstructor)[];
    loadingText: StringConstructor;
    loadingType: PropType<LoadingType>;
    iconPosition: {
        type: PropType<ButtonIconPosition>;
        default: ButtonIconPosition;
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
    type: ButtonType;
    tag: keyof HTMLElementTagNameMap;
    round: boolean;
    disabled: boolean;
    size: ButtonSize;
    loading: boolean;
    block: boolean;
    square: boolean;
    plain: boolean;
    hairline: boolean;
    nativeType: ButtonNativeType;
    iconPosition: ButtonIconPosition;
} & {
    text?: string | undefined;
    url?: string | undefined;
    to?: import("vue-router").RouteLocationRaw | undefined;
    color?: string | undefined;
    iconPrefix?: string | undefined;
    icon?: string | undefined;
    loadingSize?: string | number | undefined;
    loadingText?: string | undefined;
    loadingType?: LoadingType | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    replace: boolean;
    type: ButtonType;
    tag: keyof HTMLElementTagNameMap;
    round: boolean;
    disabled: boolean;
    size: ButtonSize;
    loading: boolean;
    block: boolean;
    square: boolean;
    plain: boolean;
    hairline: boolean;
    nativeType: ButtonNativeType;
    iconPosition: ButtonIconPosition;
}>;
export default _default;
