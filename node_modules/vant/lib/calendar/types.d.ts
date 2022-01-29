import type { ComponentPublicInstance, ComputedRef, Ref } from 'vue';
import type { CalendarProps } from './Calendar';
import type { CalendarMonthProps } from './CalendarMonth';
export declare type CalendarType = 'single' | 'range' | 'multiple';
export declare type CalendarDayType = '' | 'start' | 'start-end' | 'middle' | 'end' | 'selected' | 'multiple-middle' | 'multiple-selected' | 'disabled' | 'placeholder';
export declare type CalendarDayItem = {
    date?: Date;
    text?: string | number;
    type?: CalendarDayType;
    topInfo?: string;
    className?: unknown;
    bottomInfo?: string;
};
export declare type CalendarExpose = {
    reset: (date?: Date | Date[]) => void;
    scrollToDate: (targetDate: Date) => void;
};
export declare type CalendarInstance = ComponentPublicInstance<CalendarProps, CalendarExpose>;
export declare type CalendarMonthInstance = ComponentPublicInstance<CalendarMonthProps, {
    showed?: boolean;
    getTitle: () => string;
    getHeight: () => number;
    setVisible: (value?: boolean | undefined) => void;
    scrollToDate: (body: Element, targetDate: Date) => void;
    disabledDays: Ref<ComputedRef<CalendarDayItem[]>>;
}>;
