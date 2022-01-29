import { DatetimePickerColumnType, DatetimePickerType } from './types';
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    itemHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showToolbar: {
        type: BooleanConstructor;
        default: true;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleItemCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
} & {
    filter: import("vue").PropType<(type: string, values: string[]) => string[]>;
    columnsOrder: import("vue").PropType<DatetimePickerColumnType[]>;
    formatter: {
        type: import("vue").PropType<(type: string, value: string) => string>;
        default: (type: string, value: string) => string;
    };
} & {
    type: {
        type: import("vue").PropType<DatetimePickerType>;
        default: DatetimePickerType;
    };
    modelValue: DateConstructor;
    minDate: {
        type: DateConstructor;
        default: () => Date;
        validator: (val: unknown) => val is Date;
    };
    maxDate: {
        type: DateConstructor;
        default: () => Date;
        validator: (val: unknown) => val is Date;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "cancel" | "confirm")[], "update:modelValue" | "change" | "cancel" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    title?: unknown;
    loading?: unknown;
    readonly?: unknown;
    allowHtml?: unknown;
    itemHeight?: unknown;
    showToolbar?: unknown;
    swipeDuration?: unknown;
    visibleItemCount?: unknown;
    cancelButtonText?: unknown;
    confirmButtonText?: unknown;
    filter?: unknown;
    columnsOrder?: unknown;
    formatter?: unknown;
    type?: unknown;
    modelValue?: unknown;
    minDate?: unknown;
    maxDate?: unknown;
} & {
    type: DatetimePickerType;
    formatter: (type: string, value: string) => string;
    readonly: boolean;
    loading: boolean;
    allowHtml: boolean;
    itemHeight: string | number;
    showToolbar: boolean;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    minDate: Date;
    maxDate: Date;
} & {
    title?: string | undefined;
    filter?: ((type: string, values: string[]) => string[]) | undefined;
    modelValue?: Date | undefined;
    cancelButtonText?: string | undefined;
    confirmButtonText?: string | undefined;
    columnsOrder?: DatetimePickerColumnType[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    type: DatetimePickerType;
    formatter: (type: string, value: string) => string;
    readonly: boolean;
    loading: boolean;
    allowHtml: boolean;
    itemHeight: string | number;
    showToolbar: boolean;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    minDate: Date;
    maxDate: Date;
}>;
export default _default;
