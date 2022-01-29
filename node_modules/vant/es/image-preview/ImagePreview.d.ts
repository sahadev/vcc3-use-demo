import { PropType, CSSProperties, ExtractPropTypes } from 'vue';
import { Interceptor } from '../utils';
import { PopupCloseIconPosition } from '../popup';
declare const imagePreviewProps: {
    show: BooleanConstructor;
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    images: {
        type: PropType<string[]>;
        default: () => never[];
    };
    minZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeable: BooleanConstructor;
    showIndex: {
        type: BooleanConstructor;
        default: true;
    };
    className: PropType<unknown>;
    closeIcon: {
        type: PropType<string>;
        default: string;
    };
    transition: StringConstructor;
    beforeClose: PropType<Interceptor>;
    overlayStyle: PropType<CSSProperties>;
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    startPosition: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showIndicators: BooleanConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    closeIconPosition: {
        type: PropType<PopupCloseIconPosition>;
        default: PopupCloseIconPosition;
    };
};
export declare type ImagePreviewProps = ExtractPropTypes<typeof imagePreviewProps>;
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    images: {
        type: PropType<string[]>;
        default: () => never[];
    };
    minZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeable: BooleanConstructor;
    showIndex: {
        type: BooleanConstructor;
        default: true;
    };
    className: PropType<unknown>;
    closeIcon: {
        type: PropType<string>;
        default: string;
    };
    transition: StringConstructor;
    beforeClose: PropType<Interceptor>;
    overlayStyle: PropType<CSSProperties>;
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    startPosition: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showIndicators: BooleanConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    closeIconPosition: {
        type: PropType<PopupCloseIconPosition>;
        default: PopupCloseIconPosition;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "closed" | "update:show" | "scale")[], "change" | "close" | "closed" | "update:show" | "scale", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show?: unknown;
    loop?: unknown;
    images?: unknown;
    minZoom?: unknown;
    maxZoom?: unknown;
    overlay?: unknown;
    closeable?: unknown;
    showIndex?: unknown;
    className?: unknown;
    closeIcon?: unknown;
    transition?: unknown;
    beforeClose?: unknown;
    overlayStyle?: unknown;
    swipeDuration?: unknown;
    startPosition?: unknown;
    showIndicators?: unknown;
    closeOnPopstate?: unknown;
    closeIconPosition?: unknown;
} & {
    loop: boolean;
    overlay: boolean;
    show: boolean;
    closeIcon: string;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIconPosition: PopupCloseIconPosition;
    swipeDuration: string | number;
    showIndicators: boolean;
    startPosition: string | number;
    minZoom: string | number;
    maxZoom: string | number;
    images: string[];
    showIndex: boolean;
} & {
    beforeClose?: Interceptor | undefined;
    overlayStyle?: CSSProperties | undefined;
    className?: unknown;
    transition?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    onScale?: ((...args: any[]) => any) | undefined;
}, {
    loop: boolean;
    overlay: boolean;
    show: boolean;
    closeIcon: string;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIconPosition: PopupCloseIconPosition;
    swipeDuration: string | number;
    showIndicators: boolean;
    startPosition: string | number;
    minZoom: string | number;
    maxZoom: string | number;
    images: string[];
    showIndex: boolean;
}>;
export default _default;
