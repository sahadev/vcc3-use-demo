import { PropType, ExtractPropTypes, InjectionKey } from 'vue';
export declare type GridDirection = 'horizontal' | 'vertical';
declare const gridProps: {
    square: BooleanConstructor;
    center: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    reverse: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<GridDirection>;
    clickable: BooleanConstructor;
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export declare type GridProps = ExtractPropTypes<typeof gridProps>;
export declare type GridProvide = {
    props: GridProps;
};
export declare const GRID_KEY: InjectionKey<GridProvide>;
declare const _default: import("vue").DefineComponent<{
    square: BooleanConstructor;
    center: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    reverse: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<GridDirection>;
    clickable: BooleanConstructor;
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    square?: unknown;
    center?: unknown;
    border?: unknown;
    gutter?: unknown;
    reverse?: unknown;
    iconSize?: unknown;
    direction?: unknown;
    clickable?: unknown;
    columnNum?: unknown;
} & {
    reverse: boolean;
    center: boolean;
    border: boolean;
    clickable: boolean;
    square: boolean;
    columnNum: string | number;
} & {
    iconSize?: string | number | undefined;
    direction?: GridDirection | undefined;
    gutter?: string | number | undefined;
}>, {
    reverse: boolean;
    center: boolean;
    border: boolean;
    clickable: boolean;
    square: boolean;
    columnNum: string | number;
}>;
export default _default;
