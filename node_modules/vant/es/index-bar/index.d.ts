import { IndexBarProps } from './IndexBar';
export declare const IndexBar: import("../utils").WithInstall<import("vue").DefineComponent<{
    sticky: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    highlightColor: StringConstructor;
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    indexList: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
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
}>>;
export default IndexBar;
export type { IndexBarProps };
export type { IndexBarInstance } from './types';
