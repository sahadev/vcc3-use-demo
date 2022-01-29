declare const _default: import("vue").DefineComponent<{
    count: {
        type: NumberConstructor;
        required: true;
    };
    inited: BooleanConstructor;
    animated: BooleanConstructor;
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    swipeable: BooleanConstructor;
    lazyRender: BooleanConstructor;
    currentIndex: {
        type: NumberConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    count?: unknown;
    inited?: unknown;
    animated?: unknown;
    duration?: unknown;
    swipeable?: unknown;
    lazyRender?: unknown;
    currentIndex?: unknown;
} & {
    duration: string | number;
    lazyRender: boolean;
    count: number;
    inited: boolean;
    animated: boolean;
    swipeable: boolean;
    currentIndex: number;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    lazyRender: boolean;
    inited: boolean;
    animated: boolean;
    swipeable: boolean;
}>;
export default _default;
