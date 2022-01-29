import { NoticeBarProps } from './NoticeBar';
export declare const NoticeBar: import("../utils").WithInstall<import("vue").DefineComponent<{
    text: StringConstructor;
    mode: import("vue").PropType<import("./types").NoticeBarMode>;
    color: StringConstructor;
    delay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    leftIcon: StringConstructor;
    wrapable: BooleanConstructor;
    background: StringConstructor;
    scrollable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "replay")[], "close" | "replay", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    text?: unknown;
    mode?: unknown;
    color?: unknown;
    delay?: unknown;
    speed?: unknown;
    leftIcon?: unknown;
    wrapable?: unknown;
    background?: unknown;
    scrollable?: unknown;
} & {
    scrollable: boolean | null;
    speed: string | number;
    delay: string | number;
    wrapable: boolean;
} & {
    text?: string | undefined;
    color?: string | undefined;
    leftIcon?: string | undefined;
    background?: string | undefined;
    mode?: import("./types").NoticeBarMode | undefined;
}> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onReplay?: ((...args: any[]) => any) | undefined;
}, {
    scrollable: boolean | null;
    speed: string | number;
    delay: string | number;
    wrapable: boolean;
}>>;
export default NoticeBar;
export type { NoticeBarProps };
export type { NoticeBarMode, NoticeBarInstance } from './types';
