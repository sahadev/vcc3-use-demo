import type { ComponentPublicInstance } from 'vue';
import type { ListProps } from './List';
export declare type ListDirection = 'up' | 'down';
export declare type ListExpose = {
    check: () => void;
};
export declare type ListInstance = ComponentPublicInstance<ListProps, ListExpose>;
