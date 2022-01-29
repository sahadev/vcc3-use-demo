import { PropType } from 'vue';
import type { CalendarDayItem } from './types';
declare const _default: import("vue").DefineComponent<{
    item: {
        type: PropType<CalendarDayItem>;
        required: true;
    };
    color: StringConstructor;
    index: NumberConstructor;
    offset: {
        type: NumberConstructor;
        default: number;
    };
    rowHeight: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    item?: unknown;
    color?: unknown;
    index?: unknown;
    offset?: unknown;
    rowHeight?: unknown;
} & {
    offset: number;
    item: CalendarDayItem;
} & {
    color?: string | undefined;
    index?: number | undefined;
    rowHeight?: string | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    offset: number;
}>;
export default _default;
