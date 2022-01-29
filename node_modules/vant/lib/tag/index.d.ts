export declare const Tag: import("../utils").WithInstall<import("vue").DefineComponent<{
    size: import("vue").PropType<import("./Tag").TagSize>;
    mark: BooleanConstructor;
    show: {
        type: BooleanConstructor;
        default: true;
    };
    type: {
        type: import("vue").PropType<import("./Tag").TagType>;
        default: import("./Tag").TagType;
    };
    color: StringConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    textColor: StringConstructor;
    closeable: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    size?: unknown;
    mark?: unknown;
    show?: unknown;
    type?: unknown;
    color?: unknown;
    plain?: unknown;
    round?: unknown;
    textColor?: unknown;
    closeable?: unknown;
} & {
    type: import("./Tag").TagType;
    mark: boolean;
    round: boolean;
    show: boolean;
    plain: boolean;
    closeable: boolean;
} & {
    color?: string | undefined;
    size?: import("./Tag").TagSize | undefined;
    textColor?: string | undefined;
}> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./Tag").TagType;
    mark: boolean;
    round: boolean;
    show: boolean;
    plain: boolean;
    closeable: boolean;
}>>;
export default Tag;
export type { TagSize, TagType, TagProps } from './Tag';
