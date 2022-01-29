import type { ComponentPublicInstance } from 'vue';
import type { NoticeBarProps } from './NoticeBar';
export declare type NoticeBarMode = 'closeable' | 'link';
export declare type NoticeBarExpose = {
    reset: () => void;
};
export declare type NoticeBarInstance = ComponentPublicInstance<NoticeBarProps, NoticeBarExpose>;
