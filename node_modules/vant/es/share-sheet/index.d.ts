export declare const ShareSheet: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    overlayClass: import("vue").PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    title: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    options: {
        type: import("vue").PropType<(import("./ShareSheet").ShareSheetOption | import("./ShareSheet").ShareSheetOption[])[]>;
        default: () => never[];
    };
    cancelText: StringConstructor;
    description: StringConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:show" | "cancel")[], "select" | "update:show" | "cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show?: unknown;
    zIndex?: unknown;
    overlay?: unknown;
    duration?: unknown;
    teleport?: unknown;
    lockScroll?: unknown;
    lazyRender?: unknown;
    beforeClose?: unknown;
    overlayStyle?: unknown;
    overlayClass?: unknown;
    transitionAppear?: unknown;
    closeOnClickOverlay?: unknown;
    title?: unknown;
    round?: unknown;
    options?: unknown;
    cancelText?: unknown;
    description?: unknown;
    closeOnPopstate?: unknown;
    safeAreaInsetBottom?: unknown;
} & {
    round: boolean;
    safeAreaInsetBottom: boolean;
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    options: (import("./ShareSheet").ShareSheetOption | import("./ShareSheet").ShareSheetOption[])[];
} & {
    description?: string | undefined;
    title?: string | undefined;
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    beforeClose?: import("../utils").Interceptor | undefined;
    overlayStyle?: import("vue").CSSProperties | undefined;
    overlayClass?: unknown;
    cancelText?: string | undefined;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
}, {
    round: boolean;
    safeAreaInsetBottom: boolean;
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    options: (import("./ShareSheet").ShareSheetOption | import("./ShareSheet").ShareSheetOption[])[];
}>>;
export default ShareSheet;
export type { ShareSheetProps, ShareSheetOption, ShareSheetOptions, } from './ShareSheet';
