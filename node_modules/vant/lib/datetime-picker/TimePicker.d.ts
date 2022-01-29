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
    columnsOrder: import("vue").PropType<import("./types").DatetimePickerColumnType[]>;
    formatter: {
        type: import("vue").PropType<(type: string, value: string) => string>;
        default: (type: string, value: string) => string;
    };
} & {
    minHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: StringConstructor;
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
    minHour?: unknown;
    maxHour?: unknown;
    minMinute?: unknown;
    maxMinute?: unknown;
    modelValue?: unknown;
} & {
    formatter: (type: string, value: string) => string;
    readonly: boolean;
    loading: boolean;
    allowHtml: boolean;
    itemHeight: string | number;
    showToolbar: boolean;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    minHour: string | number;
    maxHour: string | number;
    minMinute: string | number;
    maxMinute: string | number;
} & {
    title?: string | undefined;
    filter?: ((type: string, values: string[]) => string[]) | undefined;
    modelValue?: string | undefined;
    cancelButtonText?: string | undefined;
    confirmButtonText?: string | undefined;
    columnsOrder?: import("./types").DatetimePickerColumnType[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    formatter: (type: string, value: string) => string;
    readonly: boolean;
    loading: boolean;
    allowHtml: boolean;
    itemHeight: string | number;
    showToolbar: boolean;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    minHour: string | number;
    maxHour: string | number;
    minMinute: string | number;
    maxMinute: string | number;
}>;
export default _default;
