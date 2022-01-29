export declare const Cell: import("../utils").WithInstall<import("vue").DefineComponent<{
    icon: StringConstructor;
    size: import("vue").PropType<import("./Cell").CellSize>;
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
    arrowDirection: import("vue").PropType<import("./Cell").CellArrowDirection>;
    clickable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
} & {
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
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
    to?: unknown;
    url?: unknown;
    replace?: unknown;
} & {
    replace: boolean;
    center: boolean;
    isLink: boolean;
    border: boolean;
    required: boolean;
    clickable: boolean | null;
} & {
    url?: string | undefined;
    to?: import("vue-router").RouteLocationRaw | undefined;
    label?: string | number | undefined;
    title?: string | number | undefined;
    iconPrefix?: string | undefined;
    value?: string | number | undefined;
    icon?: string | undefined;
    size?: import("./Cell").CellSize | undefined;
    valueClass?: unknown;
    labelClass?: unknown;
    titleClass?: unknown;
    titleStyle?: string | import("vue").CSSProperties | undefined;
    arrowDirection?: import("./Cell").CellArrowDirection | undefined;
}>, {
    replace: boolean;
    center: boolean;
    isLink: boolean;
    border: boolean;
    required: boolean;
    clickable: boolean | null;
}>>;
export default Cell;
export type { CellSize, CellProps, CellArrowDirection } from './Cell';
