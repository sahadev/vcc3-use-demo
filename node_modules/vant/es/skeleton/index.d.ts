export declare const Skeleton: import("../utils").WithInstall<import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("./Skeleton").SkeletonAvatarShape>;
        default: import("./Skeleton").SkeletonAvatarShape;
    };
    rowWidth: {
        type: import("vue").PropType<string | number | (string | number)[]>;
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
    avatarShape: import("./Skeleton").SkeletonAvatarShape;
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
    avatarShape: import("./Skeleton").SkeletonAvatarShape;
    rowWidth: string | number | (string | number)[];
}>>;
export default Skeleton;
export type { SkeletonProps, SkeletonAvatarShape } from './Skeleton';
