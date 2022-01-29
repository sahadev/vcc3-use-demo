import { PropType, InjectionKey, ExtractPropTypes } from 'vue';
import { IndexBarProvide } from './types';
declare function genAlphabet(): string[];
declare const indexBarProps: {
    sticky: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    highlightColor: StringConstructor;
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    indexList: {
        type: PropType<string[]>;
        default: typeof genAlphabet;
    };
};
export declare type IndexBarProps = ExtractPropTypes<typeof indexBarProps>;
export declare const INDEX_BAR_KEY: InjectionKey<IndexBarProvide>;
declare const _default: import("vue").DefineComponent<{
    sticky: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    highlightColor: StringConstructor;
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    indexList: {
        type: PropType<string[]>;
        default: typeof genAlphabet;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "change")[], "select" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    sticky?: unknown;
    zIndex?: unknown;
    teleport?: unknown;
    highlightColor?: unknown;
    stickyOffsetTop?: unknown;
    indexList?: unknown;
} & {
    sticky: boolean;
    stickyOffsetTop: number;
    indexList: string[];
} & {
    zIndex?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    highlightColor?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    sticky: boolean;
    stickyOffsetTop: number;
    indexList: string[];
}>;
export default _default;
