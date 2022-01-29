export declare const Sticky: import("../utils").WithInstall<import("vue").DefineComponent<{
    zIndex: (NumberConstructor | StringConstructor)[];
    position: {
        type: import("vue").PropType<import("./Sticky").StickyPosition>;
        default: import("./Sticky").StickyPosition;
    };
    container: import("vue").PropType<Element>;
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
    position: import("./Sticky").StickyPosition;
    offsetTop: string | number;
    offsetBottom: string | number;
} & {
    zIndex?: string | number | undefined;
    container?: Element | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onScroll?: ((...args: any[]) => any) | undefined;
}, {
    position: import("./Sticky").StickyPosition;
    offsetTop: string | number;
    offsetBottom: string | number;
}>>;
export default Sticky;
export type { StickyProps, StickyPosition } from './Sticky';
