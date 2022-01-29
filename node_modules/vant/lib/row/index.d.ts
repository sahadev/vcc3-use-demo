export declare const Row: import("../utils").WithInstall<import("vue").DefineComponent<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    wrap: {
        type: BooleanConstructor;
        default: true;
    };
    align: import("vue").PropType<import("./Row").RowAlign>;
    gutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    justify: import("vue").PropType<import("./Row").RowJustify>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    tag?: unknown;
    wrap?: unknown;
    align?: unknown;
    gutter?: unknown;
    justify?: unknown;
} & {
    tag: keyof HTMLElementTagNameMap;
    wrap: boolean;
    gutter: string | number;
} & {
    align?: import("./Row").RowAlign | undefined;
    justify?: import("./Row").RowJustify | undefined;
}>, {
    tag: keyof HTMLElementTagNameMap;
    wrap: boolean;
    gutter: string | number;
}>>;
export default Row;
export type { RowProps, RowAlign, RowJustify } from './Row';
