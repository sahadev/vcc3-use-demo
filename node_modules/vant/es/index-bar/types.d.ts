import type { ComponentPublicInstance } from 'vue';
import type { IndexBarProps } from './IndexBar';
export declare type IndexBarProvide = {
    props: IndexBarProps;
};
export declare type IndexBarExpose = {
    scrollTo: (index: string | number) => void;
};
export declare type IndexBarInstance = ComponentPublicInstance<IndexBarProps, IndexBarExpose>;
