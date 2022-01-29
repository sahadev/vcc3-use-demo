import type { PickerOption } from './types';
export declare const PICKER_KEY: unique symbol;
declare const _default: import("vue").DefineComponent<{
    textKey: {
        type: StringConstructor;
        required: true;
    };
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    className: import("vue").PropType<unknown>;
    itemHeight: {
        type: NumberConstructor;
        required: true;
    };
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    initialOptions: {
        type: import("vue").PropType<PickerOption[]>;
        default: () => never[];
    };
    visibleItemCount: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    textKey?: unknown;
    readonly?: unknown;
    allowHtml?: unknown;
    className?: unknown;
    itemHeight?: unknown;
    defaultIndex?: unknown;
    swipeDuration?: unknown;
    initialOptions?: unknown;
    visibleItemCount?: unknown;
} & {
    readonly: boolean;
    defaultIndex: number;
    allowHtml: boolean;
    itemHeight: number;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    textKey: string;
    initialOptions: PickerOption[];
} & {
    className?: unknown;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    defaultIndex: number;
    allowHtml: boolean;
    initialOptions: PickerOption[];
}>;
export default _default;
