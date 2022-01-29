declare const _default: import("vue").DefineComponent<{
    src: StringConstructor;
    show: BooleanConstructor;
    active: NumberConstructor;
    minZoom: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    maxZoom: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    rootWidth: {
        type: NumberConstructor;
        required: true;
    };
    rootHeight: {
        type: NumberConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "scale")[], "close" | "scale", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    src?: unknown;
    show?: unknown;
    active?: unknown;
    minZoom?: unknown;
    maxZoom?: unknown;
    rootWidth?: unknown;
    rootHeight?: unknown;
} & {
    show: boolean;
    minZoom: string | number;
    maxZoom: string | number;
    rootWidth: number;
    rootHeight: number;
} & {
    src?: string | undefined;
    active?: number | undefined;
}> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onScale?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
}>;
export default _default;
