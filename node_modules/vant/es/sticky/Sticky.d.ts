import { PropType, ExtractPropTypes } from 'vue';
export declare type StickyPosition = 'top' | 'bottom';
declare const stickyProps: {
    zIndex: (NumberConstructor | StringConstructor)[];
    position: {
        type: PropType<StickyPosition>;
        default: StickyPosition;
    };
    container: PropType<Element>;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offsetBottom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export declare type StickyProps = ExtractPropTypes<typeof stickyProps>;
declare const _default: import("vue").DefineComponent<{
    zIndex: (NumberConstructor | StringConstructor)[];
    position: {
        type: PropType<StickyPosition>;
        default: StickyPosition;
    };
    container: PropType<Element>;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offsetBottom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "change")[], "scroll" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    zIndex?: unknown;
    position?: unknown;
    container?: unknown;
    offsetTop?: unknown;
    offsetBottom?: unknown;
} & {
    position: StickyPosition;
    offsetTop: string | number;
    offsetBottom: string | number;
} & {
    zIndex?: string | number | undefined;
    container?: Element | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onScroll?: ((...args: any[]) => any) | undefined;
}, {
    position: StickyPosition;
    offsetTop: string | number;
    offsetBottom: string | number;
}>;
export default _default;
