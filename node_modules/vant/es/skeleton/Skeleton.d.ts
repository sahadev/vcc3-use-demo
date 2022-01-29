import { PropType, ExtractPropTypes } from 'vue';
export declare type SkeletonAvatarShape = 'square' | 'round';
declare const skeletonProps: {
    row: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    title: BooleanConstructor;
    round: BooleanConstructor;
    avatar: BooleanConstructor;
    loading: {
        type: BooleanConstructor;
        default: true;
    };
    animate: {
        type: BooleanConstructor;
        default: true;
    };
    avatarSize: (NumberConstructor | StringConstructor)[];
    titleWidth: (NumberConstructor | StringConstructor)[];
    avatarShape: {
        type: PropType<SkeletonAvatarShape>;
        default: SkeletonAvatarShape;
    };
    rowWidth: {
        type: PropType<string | number | (string | number)[]>;
        default: string;
    };
};
export declare type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;
declare const _default: import("vue").DefineComponent<{
    row: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    title: BooleanConstructor;
    round: BooleanConstructor;
    avatar: BooleanConstructor;
    loading: {
        type: BooleanConstructor;
        default: true;
    };
    animate: {
        type: BooleanConstructor;
        default: true;
    };
    avatarSize: (NumberConstructor | StringConstructor)[];
    titleWidth: (NumberConstructor | StringConstructor)[];
    avatarShape: {
        type: PropType<SkeletonAvatarShape>;
        default: SkeletonAvatarShape;
    };
    rowWidth: {
        type: PropType<string | number | (string | number)[]>;
        default: string;
    };
}, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    row?: unknown;
    title?: unknown;
    round?: unknown;
    avatar?: unknown;
    loading?: unknown;
    animate?: unknown;
    avatarSize?: unknown;
    titleWidth?: unknown;
    avatarShape?: unknown;
    rowWidth?: unknown;
} & {
    title: boolean;
    animate: boolean;
    round: boolean;
    loading: boolean;
    row: string | number;
    avatar: boolean;
    avatarShape: SkeletonAvatarShape;
    rowWidth: string | number | (string | number)[];
} & {
    avatarSize?: string | number | undefined;
    titleWidth?: string | number | undefined;
}>, {
    title: boolean;
    animate: boolean;
    round: boolean;
    loading: boolean;
    row: string | number;
    avatar: boolean;
    avatarShape: SkeletonAvatarShape;
    rowWidth: string | number | (string | number)[];
}>;
export default _default;
