import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
declare type CellType = 'next' | 'prev' | 'current';
interface Cell {
    text: number;
    type: CellType;
}
export declare const getPrevMonthLastDays: (date: Dayjs, count: number) => number[];
export declare const getMonthDays: (date: Dayjs) => number[];
declare const _default: import("vue").DefineComponent<{
    readonly selectedDay: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<dayjs.Dayjs>, unknown, unknown, unknown, unknown>;
    readonly range: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<[dayjs.Dayjs, dayjs.Dayjs]>, unknown, unknown, unknown, unknown>;
    readonly date: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<dayjs.Dayjs>, unknown, true, unknown, unknown>;
    readonly hideHeader: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
}, {
    isInRange: import("vue").ComputedRef<boolean>;
    weekDays: import("vue").ComputedRef<string[]>;
    rows: import("vue").ComputedRef<Cell[][]>;
    getCellClass: ({ text, type }: Cell) => string[];
    handlePickDay: ({ text, type }: Cell) => void;
    getSlotData: ({ text, type }: Cell) => {
        isSelected: boolean;
        type: string;
        day: string;
        date: Date;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    pick: (value: dayjs.Dayjs) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly selectedDay?: unknown;
    readonly range?: unknown;
    readonly date?: unknown;
    readonly hideHeader?: unknown;
} & {
    date: dayjs.Dayjs;
} & {
    range?: [dayjs.Dayjs, dayjs.Dayjs] | undefined;
    selectedDay?: dayjs.Dayjs | undefined;
    hideHeader?: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
}> & {
    onPick?: ((value: dayjs.Dayjs) => any) | undefined;
}, {
    range: [dayjs.Dayjs, dayjs.Dayjs];
    selectedDay: dayjs.Dayjs;
    hideHeader: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
}>;
export default _default;
