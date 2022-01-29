import { PickerProps } from './Picker';
export declare const Picker: import("../utils").WithInstall<import("vue").DefineComponent<{
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
    columns: {
        type: import("vue").PropType<(import("./types").PickerOption | import("./types").PickerColumn)[]>;
        default: () => never[];
    };
    valueKey: StringConstructor;
    defaultIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    toolbarPosition: {
        type: import("vue").PropType<import("./types").PickerToolbarPosition>;
        default: import("./types").PickerToolbarPosition;
    };
    columnsFieldNames: import("vue").PropType<import("./types").PickerFieldNames>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "cancel" | "confirm")[], "change" | "cancel" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
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
    columns?: unknown;
    valueKey?: unknown;
    defaultIndex?: unknown;
    toolbarPosition?: unknown;
    columnsFieldNames?: unknown;
} & {
    readonly: boolean;
    loading: boolean;
    defaultIndex: string | number;
    allowHtml: boolean;
    itemHeight: string | number;
    showToolbar: boolean;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    columns: (import("./types").PickerOption | import("./types").PickerColumn)[];
    toolbarPosition: import("./types").PickerToolbarPosition;
} & {
    title?: string | undefined;
    cancelButtonText?: string | undefined;
    confirmButtonText?: string | undefined;
    valueKey?: string | undefined;
    columnsFieldNames?: import("./types").PickerFieldNames | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    loading: boolean;
    defaultIndex: string | number;
    allowHtml: boolean;
    itemHeight: string | number;
    showToolbar: boolean;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    columns: (import("./types").PickerOption | import("./types").PickerColumn)[];
    toolbarPosition: import("./types").PickerToolbarPosition;
}>>;
export default Picker;
export type { PickerProps };
export type { PickerColumn, PickerOption, PickerInstance, PickerFieldNames, PickerObjectColumn, PickerObjectOption, PickerToolbarPosition, } from './types';
