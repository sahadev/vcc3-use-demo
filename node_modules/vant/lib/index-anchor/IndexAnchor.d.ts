import { ExtractPropTypes } from 'vue';
declare const indexAnchorProps: {
    index: (NumberConstructor | StringConstructor)[];
};
export declare type IndexAnchorProps = ExtractPropTypes<typeof indexAnchorProps>;
declare const _default: import("vue").DefineComponent<{
    index: (NumberConstructor | StringConstructor)[];
}, (() => JSX.Element) | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    index?: unknown;
} & {} & {
    index?: string | number | undefined;
}>, {}>;
export default _default;
