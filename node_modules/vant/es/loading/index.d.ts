export declare const Loading: import("../utils").WithInstall<import("vue").DefineComponent<{
    size: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<import("./Loading").LoadingType>;
        default: import("./Loading").LoadingType;
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
    type: import("./Loading").LoadingType;
    vertical: boolean;
} & {
    color?: string | undefined;
    size?: string | number | undefined;
    textSize?: string | number | undefined;
    textColor?: string | undefined;
}>, {
    type: import("./Loading").LoadingType;
    vertical: boolean;
}>>;
export default Loading;
export type { LoadingType, LoadingProps } from './Loading';
