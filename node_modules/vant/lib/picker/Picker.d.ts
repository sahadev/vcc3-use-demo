import { PropType, ExtractPropTypes } from 'vue';
import type { PickerColumn, PickerOption, PickerFieldNames, PickerToolbarPosition } from './types';
export declare const pickerSharedProps: {
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
};
declare const pickerProps: {
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
        type: PropType<(PickerOption | PickerColumn)[]>;
        default: () => never[];
    };
    valueKey: StringConstructor;
    defaultIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    toolbarPosition: {
        type: PropType<PickerToolbarPosition>;
        default: PickerToolbarPosition;
    };
    columnsFieldNames: PropType<PickerFieldNames>;
};
export declare type PickerProps = ExtractPropTypes<typeof pickerProps>;
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
    columns: {
        type: PropType<(PickerOption | PickerColumn)[]>;
        default: () => never[];
    };
    valueKey: StringConstructor;
    defaultIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    toolbarPosition: {
        type: PropType<PickerToolbarPosition>;
        default: PickerToolbarPosition;
    };
    columnsFieldNames: PropType<PickerFieldNames>;
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
    columns: (PickerOption | PickerColumn)[];
    toolbarPosition: PickerToolbarPosition;
} & {
    title?: string | undefined;
    cancelButtonText?: string | undefined;
    confirmButtonText?: string | undefined;
    valueKey?: string | undefined;
    columnsFieldNames?: PickerFieldNames | undefined;
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
    columns: (PickerOption | PickerColumn)[];
    toolbarPosition: PickerToolbarPosition;
}>;
export default _default;
