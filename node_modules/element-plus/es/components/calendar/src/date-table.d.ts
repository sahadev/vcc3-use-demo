import type { ExtractPropTypes } from 'vue';
import type { Dayjs } from 'dayjs';
export declare const dateTableProps: {
    readonly selectedDay: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Dayjs>, unknown, unknown, unknown, unknown>;
    readonly range: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<[Dayjs, Dayjs]>, unknown, unknown, unknown, unknown>;
    readonly date: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Dayjs>, unknown, true, unknown, unknown>;
    readonly hideHeader: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
};
export declare type DateTableProps = ExtractPropTypes<typeof dateTableProps>;
export declare const dateTableEmits: {
    pick: (value: Dayjs) => boolean;
};
export declare type DateTableEmits = typeof dateTableEmits;
