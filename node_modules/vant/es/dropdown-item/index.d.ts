import { DropdownItemProps } from './DropdownItem';
export declare const DropdownItem: import("../utils").WithInstall<import("vue").DefineComponent<{
    title: StringConstructor;
    options: {
        type: import("vue").PropType<import("./types").DropdownItemOption[]>;
        default: () => never[];
    };
    disabled: BooleanConstructor;
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: import("vue").PropType<unknown>;
    titleClass: import("vue").PropType<unknown>;
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
    options: import("./types").DropdownItemOption[];
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
    options: import("./types").DropdownItemOption[];
}>>;
export default DropdownItem;
export type { DropdownItemProps };
export type { DropdownItemInstance, DropdownItemOption } from './types';
