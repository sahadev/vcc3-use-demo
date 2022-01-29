import { ExtractPropTypes } from 'vue';
declare const passwordInputProps: {
    info: StringConstructor;
    mask: {
        type: BooleanConstructor;
        default: true;
    };
    value: {
        type: import("vue").PropType<string>;
        default: string;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    focused: BooleanConstructor;
    errorInfo: StringConstructor;
};
export declare type PasswordInputProps = ExtractPropTypes<typeof passwordInputProps>;
declare const _default: import("vue").DefineComponent<{
    info: StringConstructor;
    mask: {
        type: BooleanConstructor;
        default: true;
    };
    value: {
        type: import("vue").PropType<string>;
        default: string;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    focused: BooleanConstructor;
    errorInfo: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "focus"[], "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    info?: unknown;
    mask?: unknown;
    value?: unknown;
    gutter?: unknown;
    length?: unknown;
    focused?: unknown;
    errorInfo?: unknown;
} & {
    length: string | number;
    mask: boolean;
    value: string;
    focused: boolean;
} & {
    gutter?: string | number | undefined;
    info?: string | undefined;
    errorInfo?: string | undefined;
}> & {
    onFocus?: ((...args: any[]) => any) | undefined;
}, {
    length: string | number;
    mask: boolean;
    value: string;
    focused: boolean;
}>;
export default _default;
