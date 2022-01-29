import { SwipeProps } from './Swipe';
export declare const Swipe: import("../utils").WithInstall<import("vue").DefineComponent<{
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    vertical: BooleanConstructor;
    autoplay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    touchable: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: BooleanConstructor;
    initialSwipe: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    indicatorColor: StringConstructor;
    showIndicators: {
        type: BooleanConstructor;
        default: true;
    };
    stopPropagation: {
        type: BooleanConstructor;
        default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    loop?: unknown;
    width?: unknown;
    height?: unknown;
    vertical?: unknown;
    autoplay?: unknown;
    duration?: unknown;
    touchable?: unknown;
    lazyRender?: unknown;
    initialSwipe?: unknown;
    indicatorColor?: unknown;
    showIndicators?: unknown;
    stopPropagation?: unknown;
} & {
    autoplay: string | number;
    loop: boolean;
    vertical: boolean;
    duration: string | number;
    lazyRender: boolean;
    touchable: boolean;
    initialSwipe: string | number;
    showIndicators: boolean;
    stopPropagation: boolean;
} & {
    width?: string | number | undefined;
    height?: string | number | undefined;
    indicatorColor?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    autoplay: string | number;
    loop: boolean;
    vertical: boolean;
    duration: string | number;
    lazyRender: boolean;
    touchable: boolean;
    initialSwipe: string | number;
    showIndicators: boolean;
    stopPropagation: boolean;
}>>;
export default Swipe;
export type { SwipeProps };
export type { SwipeInstance, SwipeToOptions } from './types';
