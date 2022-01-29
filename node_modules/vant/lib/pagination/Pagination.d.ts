import { ExtractPropTypes } from 'vue';
export declare type PaginationMode = 'simple' | 'multi';
declare const paginationProps: {
    mode: {
        type: import("vue").PropType<PaginationMode>;
        default: PaginationMode;
    };
    prevText: StringConstructor;
    nextText: StringConstructor;
    pageCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    totalItems: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showPageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    forceEllipses: BooleanConstructor;
};
export declare type PaginationProps = ExtractPropTypes<typeof paginationProps>;
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: import("vue").PropType<PaginationMode>;
        default: PaginationMode;
    };
    prevText: StringConstructor;
    nextText: StringConstructor;
    pageCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    totalItems: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showPageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    forceEllipses: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    mode?: unknown;
    prevText?: unknown;
    nextText?: unknown;
    pageCount?: unknown;
    modelValue?: unknown;
    totalItems?: unknown;
    showPageSize?: unknown;
    itemsPerPage?: unknown;
    forceEllipses?: unknown;
} & {
    modelValue: number;
    mode: PaginationMode;
    pageCount: string | number;
    totalItems: string | number;
    showPageSize: string | number;
    itemsPerPage: string | number;
    forceEllipses: boolean;
} & {
    prevText?: string | undefined;
    nextText?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number;
    mode: PaginationMode;
    pageCount: string | number;
    totalItems: string | number;
    showPageSize: string | number;
    itemsPerPage: string | number;
    forceEllipses: boolean;
}>;
export default _default;
