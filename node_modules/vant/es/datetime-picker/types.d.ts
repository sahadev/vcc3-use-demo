import { ComponentPublicInstance } from 'vue';
import type { PickerInstance } from '../picker';
import { DatetimePickerProps } from './DatetimePicker';
export declare type DatetimePickerColumnType = 'year' | 'month' | 'day' | 'hour' | 'minute';
export declare type DatetimePickerType = 'date' | 'time' | 'datetime' | 'datehour' | 'month-day' | 'year-month';
export declare type DatetimePickerExpose = {
    getPicker: () => PickerInstance;
};
export declare type DatetimePickerInstance = ComponentPublicInstance<DatetimePickerProps, DatetimePickerExpose>;
