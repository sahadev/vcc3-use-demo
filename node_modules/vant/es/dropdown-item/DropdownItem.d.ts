import { PropType, ExtractPropTypes } from 'vue';
import type { DropdownItemOption } from './types';
declare const dropdownItemProps: {
    title: StringConstructor;
    options: {
        type: PropType<DropdownItemOption[]>;
        default: () => never[];
    };
    disabled: BooleanConstructor;
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: PropType<unknown>;
    titleClass: PropType<unknown>;
};
export declare type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>;
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    options: {
        type: PropType<DropdownItemOption[]>;
        default: () => never[];
    };
    disabled: BooleanConstructor;
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: PropType<unknown>;
    titleClass: PropType<unknown>;
}, (() => JSX.Element) | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "open" | "change" | "close" | "opened" | "closed")[], "open" | "update:modelValue" | "change" | "close" | "opened" | "closed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    title?: unknown;
    options?: unknown;
    disabled?: unknown;
    teleport?: unknown;
    lazyRender?: unknown;
    modelValue?: unknown;
    titleClass?: unknown;
} & {
    disabled: boolean;
    lazyRender: boolean;
    options: DropdownItemOption[];
} & {
    title?: string | undefined;
    titleClass?: unknown;
    modelValue?: unknown;
    teleport?: string | import("vue").RendererElement | null | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    lazyRender: boolean;
    options: DropdownItemOption[];
}>;
export default _default;
