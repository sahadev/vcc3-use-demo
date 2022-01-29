import type { ComponentPublicInstance } from 'vue';
import type { PickerProps } from './Picker';
export declare type PickerToolbarPosition = 'top' | 'bottom';
export declare type PickerFieldNames = {
    text?: string;
    values?: string;
    children?: string;
};
export declare type PickerObjectOption = {
    text?: string | number;
    disabled?: boolean;
    [key: PropertyKey]: any;
};
export declare type PickerOption = string | number | PickerObjectOption;
export declare type PickerObjectColumn = {
    values?: PickerOption[];
    children?: PickerColumn;
    className?: unknown;
    defaultIndex?: number;
    [key: PropertyKey]: any;
};
export declare type PickerColumn = PickerOption[] | PickerObjectColumn;
export declare type PickerExpose = {
    confirm: () => void;
    getValues: <T = PickerOption>() => T[];
    setValues: (values: string[]) => void;
    getIndexes: () => number[];
    setIndexes: (indexes: number[]) => void;
    getColumnIndex: (index: number) => number;
    setColumnIndex: (columnIndex: number, optionIndex: number) => void;
    getColumnValue: <T = PickerOption>(index: number) => T;
    setColumnValue: (index: number, value: string) => void;
    getColumnValues: <T = PickerOption>(index: number) => T[];
    setColumnValues: (index: number, options: PickerOption[]) => void;
};
export declare type PickerInstance = ComponentPublicInstance<PickerProps, PickerExpose>;
