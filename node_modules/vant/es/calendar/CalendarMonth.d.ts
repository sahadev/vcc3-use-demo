import { PropType, ExtractPropTypes } from 'vue';
import type { CalendarType, CalendarDayItem } from './types';
declare const calendarMonthProps: {
    date: {
        type: DateConstructor;
        required: true;
    };
    type: PropType<CalendarType>;
    color: StringConstructor;
    minDate: {
        type: DateConstructor;
        required: true;
    };
    maxDate: {
        type: DateConstructor;
        required: true;
    };
    showMark: BooleanConstructor;
    rowHeight: (NumberConstructor | StringConstructor)[];
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
    lazyRender: BooleanConstructor;
    currentDate: PropType<Date | Date[] | null>;
    allowSameDay: BooleanConstructor;
    showSubtitle: BooleanConstructor;
    showMonthTitle: BooleanConstructor;
    firstDayOfWeek: NumberConstructor;
};
export declare type CalendarMonthProps = ExtractPropTypes<typeof calendarMonthProps>;
declare const _default: import("vue").DefineComponent<{
    date: {
        type: DateConstructor;
        required: true;
    };
    type: PropType<CalendarType>;
    color: StringConstructor;
    minDate: {
        type: DateConstructor;
        required: true;
    };
    maxDate: {
        type: DateConstructor;
        required: true;
    };
    showMark: BooleanConstructor;
    rowHeight: (NumberConstructor | StringConstructor)[];
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
    lazyRender: BooleanConstructor;
    currentDate: PropType<Date | Date[] | null>;
    allowSameDay: BooleanConstructor;
    showSubtitle: BooleanConstructor;
    showMonthTitle: BooleanConstructor;
    firstDayOfWeek: NumberConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update-height")[], "click" | "update-height", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    date?: unknown;
    type?: unknown;
    color?: unknown;
    minDate?: unknown;
    maxDate?: unknown;
    showMark?: unknown;
    rowHeight?: unknown;
    formatter?: unknown;
    lazyRender?: unknown;
    currentDate?: unknown;
    allowSameDay?: unknown;
    showSubtitle?: unknown;
    showMonthTitle?: unknown;
    firstDayOfWeek?: unknown;
} & {
    lazyRender: boolean;
    date: Date;
    minDate: Date;
    maxDate: Date;
    showMark: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    showMonthTitle: boolean;
} & {
    type?: CalendarType | undefined;
    color?: string | undefined;
    formatter?: ((item: CalendarDayItem) => CalendarDayItem) | undefined;
    rowHeight?: string | number | undefined;
    firstDayOfWeek?: number | undefined;
    currentDate?: Date | Date[] | null | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate-height"?: ((...args: any[]) => any) | undefined;
}, {
    lazyRender: boolean;
    showMark: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    showMonthTitle: boolean;
}>;
export default _default;
