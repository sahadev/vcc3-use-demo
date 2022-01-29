import { ExtractPropTypes } from 'vue';
export declare type LoadingType = 'circular' | 'spinner';
declare const loadingProps: {
    size: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<LoadingType>;
        default: LoadingType;
    };
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
};
export declare type LoadingProps = ExtractPropTypes<typeof loadingProps>;
declare const _default: import("vue").DefineComponent<{
    size: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<LoadingType>;
        default: LoadingType;
    };
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    size?: unknown;
    type?: unknown;
    color?: unknown;
    vertical?: unknown;
    textSize?: unknown;
    textColor?: unknown;
} & {
    type: LoadingType;
    vertical: boolean;
} & {
    color?: string | undefined;
    size?: string | number | undefined;
    textSize?: string | number | undefined;
    textColor?: string | undefined;
}>, {
    type: LoadingType;
    vertical: boolean;
}>;
export default _default;
