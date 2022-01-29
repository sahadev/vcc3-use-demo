export declare const PasswordInput: import("../utils").WithInstall<import("vue").DefineComponent<{
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
}>>;
export default PasswordInput;
export type { PasswordInputProps } from './PasswordInput';
