export declare const Col: import("../utils").WithInstall<import("vue").DefineComponent<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    span: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offset: (NumberConstructor | StringConstructor)[];
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    tag?: unknown;
    span?: unknown;
    offset?: unknown;
} & {
    span: string | number;
    tag: keyof HTMLElementTagNameMap;
} & {
    offset?: string | number | undefined;
}>, {
    span: string | number;
    tag: keyof HTMLElementTagNameMap;
}>>;
export default Col;
export type { ColProps } from './Col';
