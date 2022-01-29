import type { ComponentPublicInstance } from 'vue';
import type { SearchProps } from './Search';
export declare type SearchShape = 'square' | 'round';
export declare type SearchExpose = {
    focus: () => void;
    blur: () => void;
};
export declare type SearchInstance = ComponentPublicInstance<SearchProps, SearchExpose>;
