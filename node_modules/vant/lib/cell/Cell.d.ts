import { PropType, CSSProperties, ExtractPropTypes } from 'vue';
export declare type CellSize = 'normal' | 'large';
export declare type CellArrowDirection = 'up' | 'down' | 'left' | 'right';
export declare const cellSharedProps: {
    icon: StringConstructor;
    size: PropType<CellSize>;
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
    valueClass: PropType<unknown>;
    labelClass: PropType<unknown>;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | CSSProperties>;
    arrowDirection: PropType<CellArrowDirection>;
    clickable: {
        type: PropType<boolean | null>;
        default: null;
    };
};
declare const cellProps: {
    icon: StringConstructor;
    size: PropType<CellSize>;
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
    valueClass: PropType<unknown>;
    labelClass: PropType<unknown>;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | CSSProperties>;
    arrowDirection: PropType<CellArrowDirection>;
    clickable: {
        type: PropType<boolean | null>;
        default: null;
    };
} & {
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
};
export declare type CellProps = ExtractPropTypes<typeof cellProps>;
declare const _default: import("vue").DefineComponent<{
    icon: StringConstructor;
    size: PropType<CellSize>;
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
    valueClass: PropType<unknown>;
    labelClass: PropType<unknown>;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | CSSProperties>;
    arrowDirection: PropType<CellArrowDirection>;
    clickable: {
        type: PropType<boolean | null>;
        default: null;
    };
} & {
    to: PropType<import("vue-router").RouteLocationRaw>;
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
    size?: CellSize | undefined;
    valueClass?: unknown;
    labelClass?: unknown;
    titleClass?: unknown;
    titleStyle?: string | CSSProperties | undefined;
    arrowDirection?: CellArrowDirection | undefined;
}>, {
    replace: boolean;
    center: boolean;
    isLink: boolean;
    border: boolean;
    required: boolean;
    clickable: boolean | null;
}>;
export default _default;
