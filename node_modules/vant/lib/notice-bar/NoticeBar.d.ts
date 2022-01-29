import { PropType, ExtractPropTypes } from 'vue';
import { NoticeBarMode } from './types';
declare const noticeBarProps: {
    text: StringConstructor;
    mode: PropType<NoticeBarMode>;
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
        type: PropType<boolean | null>;
        default: null;
    };
};
export declare type NoticeBarProps = ExtractPropTypes<typeof noticeBarProps>;
declare const _default: import("vue").DefineComponent<{
    text: StringConstructor;
    mode: PropType<NoticeBarMode>;
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
        type: PropType<boolean | null>;
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
    mode?: NoticeBarMode | undefined;
}> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onReplay?: ((...args: any[]) => any) | undefined;
}, {
    scrollable: boolean | null;
    speed: string | number;
    delay: string | number;
    wrapable: boolean;
}>;
export default _default;
