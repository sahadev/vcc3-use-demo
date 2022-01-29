export declare const Pagination: import("../utils").WithInstall<import("vue").DefineComponent<{
    mode: {
        type: import("vue").PropType<import("./Pagination").PaginationMode>;
        default: import("./Pagination").PaginationMode;
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
    mode: import("./Pagination").PaginationMode;
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
    mode: import("./Pagination").PaginationMode;
    pageCount: string | number;
    totalItems: string | number;
    showPageSize: string | number;
    itemsPerPage: string | number;
    forceEllipses: boolean;
}>>;
export default Pagination;
export type { PaginationMode, PaginationProps } from './Pagination';
