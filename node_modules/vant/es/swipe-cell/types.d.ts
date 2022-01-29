import type { ComponentPublicInstance } from 'vue';
import type { SwipeCellProps } from './SwipeCell';
export declare type SwipeCellSide = 'left' | 'right';
export declare type SwipeCellPosition = SwipeCellSide | 'cell' | 'outside';
export declare type SwipeCellExpose = {
    open: (side: SwipeCellSide) => void;
    close: (position: SwipeCellPosition) => void;
};
export declare type SwipeCellInstance = ComponentPublicInstance<SwipeCellProps, SwipeCellExpose>;
