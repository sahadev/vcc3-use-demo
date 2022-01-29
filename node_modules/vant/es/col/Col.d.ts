import { ExtractPropTypes } from 'vue';
declare const colProps: {
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    span: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offset: (NumberConstructor | StringConstructor)[];
};
export declare type ColProps = ExtractPropTypes<typeof colProps>;
declare const _default: import("vue").DefineComponent<{
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
}>;
export default _default;
