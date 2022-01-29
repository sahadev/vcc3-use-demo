import type { ComponentPublicInstance, ComputedRef } from 'vue';
import type { SwipeProps } from './Swipe';
export declare type SwipeState = {
    rect: {
        width: number;
        height: number;
    } | null;
    width: number;
    height: number;
    offset: number;
    active: number;
    swiping: boolean;
};
export declare type SwipeToOptions = {
    immediate?: boolean;
};
export declare type SwipeExpose = {
    prev: () => void;
    next: () => void;
    resize: () => void;
    swipeTo: (index: number, options?: SwipeToOptions) => void;
    /** @private */
    state: SwipeState;
};
export declare type SwipeProvide = {
    props: SwipeProps;
    size: ComputedRef<number>;
    count: ComputedRef<number>;
    activeIndicator: ComputedRef<number>;
};
export declare type SwipeInstance = ComponentPublicInstance<SwipeProps, SwipeExpose>;
