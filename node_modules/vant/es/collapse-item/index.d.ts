export declare const CollapseItem: import("../utils").WithInstall<import("vue").DefineComponent<{
    icon: StringConstructor;
    size: import("vue").PropType<import("..").CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    required: BooleanConstructor;
    iconPrefix: StringConstructor;
    valueClass: import("vue").PropType<unknown>;
    labelClass: import("vue").PropType<unknown>;
    titleClass: import("vue").PropType<unknown>;
    titleStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    arrowDirection: import("vue").PropType<import("..").CellArrowDirection>;
    clickable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
} & {
    name: (NumberConstructor | StringConstructor)[];
    isLink: {
        type: BooleanConstructor;
        default: true;
    };
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
}, (() => JSX.Element) | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    icon?: unknown;
    size?: unknown;
    title?: unknown;
    value?: unknown;
    label?: unknown;
    center?: unknown;
    isLink?: unknown;
    border?: unknown;
    required?: unknown;
    iconPrefix?: unknown;
    valueClass?: unknown;
    labelClass?: unknown;
    titleClass?: unknown;
    titleStyle?: unknown;
    arrowDirection?: unknown;
    clickable?: unknown;
    name?: unknown;
    disabled?: unknown;
    readonly?: unknown;
} & {
    center: boolean;
    disabled: boolean;
    isLink: boolean;
    border: boolean;
    required: boolean;
    clickable: boolean | null;
    readonly: boolean;
} & {
    name?: string | number | undefined;
    label?: string | number | undefined;
    title?: string | number | undefined;
    iconPrefix?: string | undefined;
    value?: string | number | undefined;
    icon?: string | undefined;
    size?: import("..").CellSize | undefined;
    valueClass?: unknown;
    labelClass?: unknown;
    titleClass?: unknown;
    titleStyle?: string | import("vue").CSSProperties | undefined;
    arrowDirection?: import("..").CellArrowDirection | undefined;
}>, {
    center: boolean;
    disabled: boolean;
    isLink: boolean;
    border: boolean;
    required: boolean;
    clickable: boolean | null;
    readonly: boolean;
}>>;
export default CollapseItem;
export type { CollapseItemProps } from './CollapseItem';
export type { CollapseItemInstance } from './types';
