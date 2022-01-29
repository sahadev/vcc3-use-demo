import { PropType, ExtractPropTypes } from 'vue';
export declare type NumberKeyboardTheme = 'default' | 'custom';
declare const numberKeyboardProps: {
    show: BooleanConstructor;
    title: StringConstructor;
    theme: {
        type: PropType<NumberKeyboardTheme>;
        default: NumberKeyboardTheme;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string>;
        default: string;
    };
    transition: {
        type: BooleanConstructor;
        default: true;
    };
    blurOnClose: {
        type: BooleanConstructor;
        default: true;
    };
    showDeleteKey: {
        type: BooleanConstructor;
        default: true;
    };
    randomKeyOrder: BooleanConstructor;
    closeButtonText: StringConstructor;
    deleteButtonText: StringConstructor;
    closeButtonLoading: BooleanConstructor;
    hideOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    extraKey: {
        type: PropType<string | string[]>;
        default: string;
    };
};
export declare type NumberKeyboardProps = ExtractPropTypes<typeof numberKeyboardProps>;
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    title: StringConstructor;
    theme: {
        type: PropType<NumberKeyboardTheme>;
        default: NumberKeyboardTheme;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string>;
        default: string;
    };
    transition: {
        type: BooleanConstructor;
        default: true;
    };
    blurOnClose: {
        type: BooleanConstructor;
        default: true;
    };
    showDeleteKey: {
        type: BooleanConstructor;
        default: true;
    };
    randomKeyOrder: BooleanConstructor;
    closeButtonText: StringConstructor;
    deleteButtonText: StringConstructor;
    closeButtonLoading: BooleanConstructor;
    hideOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    extraKey: {
        type: PropType<string | string[]>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "blur" | "update:modelValue" | "hide" | "show" | "close" | "delete")[], "input" | "blur" | "update:modelValue" | "hide" | "show" | "close" | "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show?: unknown;
    title?: unknown;
    theme?: unknown;
    zIndex?: unknown;
    teleport?: unknown;
    maxlength?: unknown;
    modelValue?: unknown;
    transition?: unknown;
    blurOnClose?: unknown;
    showDeleteKey?: unknown;
    randomKeyOrder?: unknown;
    closeButtonText?: unknown;
    deleteButtonText?: unknown;
    closeButtonLoading?: unknown;
    hideOnClickOutside?: unknown;
    safeAreaInsetBottom?: unknown;
    extraKey?: unknown;
} & {
    maxlength: string | number;
    modelValue: string;
    safeAreaInsetBottom: boolean;
    show: boolean;
    transition: boolean;
    theme: NumberKeyboardTheme;
    blurOnClose: boolean;
    showDeleteKey: boolean;
    randomKeyOrder: boolean;
    closeButtonLoading: boolean;
    hideOnClickOutside: boolean;
    extraKey: string | string[];
} & {
    title?: string | undefined;
    zIndex?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    deleteButtonText?: string | undefined;
    closeButtonText?: string | undefined;
}> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
}, {
    maxlength: string | number;
    modelValue: string;
    safeAreaInsetBottom: boolean;
    show: boolean;
    transition: boolean;
    theme: NumberKeyboardTheme;
    blurOnClose: boolean;
    showDeleteKey: boolean;
    randomKeyOrder: boolean;
    closeButtonLoading: boolean;
    hideOnClickOutside: boolean;
    extraKey: string | string[];
}>;
export default _default;
