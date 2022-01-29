import { PropType, ExtractPropTypes } from 'vue';
import type { DialogTheme, DialogAction, DialogMessage, DialogMessageAlign } from './types';
declare const dialogProps: {
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    beforeClose: PropType<import("../utils").Interceptor>;
    overlayStyle: PropType<import("vue").CSSProperties>;
    overlayClass: PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    title: StringConstructor;
    theme: PropType<DialogTheme>;
    width: (NumberConstructor | StringConstructor)[];
    message: PropType<DialogMessage>;
    callback: PropType<(action?: DialogAction | undefined) => void>;
    allowHtml: BooleanConstructor;
    className: PropType<unknown>;
    transition: {
        type: PropType<string>;
        default: string;
    };
    messageAlign: PropType<DialogMessageAlign>;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    showCancelButton: BooleanConstructor;
    cancelButtonText: StringConstructor;
    cancelButtonColor: StringConstructor;
    confirmButtonText: StringConstructor;
    confirmButtonColor: StringConstructor;
    showConfirmButton: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: BooleanConstructor;
};
export declare type DialogProps = ExtractPropTypes<typeof dialogProps>;
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    beforeClose: PropType<import("../utils").Interceptor>;
    overlayStyle: PropType<import("vue").CSSProperties>;
    overlayClass: PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    title: StringConstructor;
    theme: PropType<DialogTheme>;
    width: (NumberConstructor | StringConstructor)[];
    message: PropType<DialogMessage>;
    callback: PropType<(action?: DialogAction | undefined) => void>;
    allowHtml: BooleanConstructor;
    className: PropType<unknown>;
    transition: {
        type: PropType<string>;
        default: string;
    };
    messageAlign: PropType<DialogMessageAlign>;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    showCancelButton: BooleanConstructor;
    cancelButtonText: StringConstructor;
    cancelButtonColor: StringConstructor;
    confirmButtonText: StringConstructor;
    confirmButtonColor: StringConstructor;
    showConfirmButton: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:show" | "cancel" | "confirm")[], "update:show" | "cancel" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show?: unknown;
    zIndex?: unknown;
    overlay?: unknown;
    duration?: unknown;
    teleport?: unknown;
    lockScroll?: unknown;
    lazyRender?: unknown;
    beforeClose?: unknown;
    overlayStyle?: unknown;
    overlayClass?: unknown;
    transitionAppear?: unknown;
    closeOnClickOverlay?: unknown;
    title?: unknown;
    theme?: unknown;
    width?: unknown;
    message?: unknown;
    callback?: unknown;
    allowHtml?: unknown;
    className?: unknown;
    transition?: unknown;
    messageAlign?: unknown;
    closeOnPopstate?: unknown;
    showCancelButton?: unknown;
    cancelButtonText?: unknown;
    cancelButtonColor?: unknown;
    confirmButtonText?: unknown;
    confirmButtonColor?: unknown;
    showConfirmButton?: unknown;
} & {
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    transition: string;
    closeOnPopstate: boolean;
    allowHtml: boolean;
    showCancelButton: boolean;
    showConfirmButton: boolean;
} & {
    width?: string | number | undefined;
    message?: DialogMessage | undefined;
    title?: string | undefined;
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    beforeClose?: import("../utils").Interceptor | undefined;
    overlayStyle?: import("vue").CSSProperties | undefined;
    overlayClass?: unknown;
    className?: unknown;
    callback?: ((action?: DialogAction | undefined) => void) | undefined;
    cancelButtonText?: string | undefined;
    confirmButtonText?: string | undefined;
    theme?: DialogTheme | undefined;
    messageAlign?: DialogMessageAlign | undefined;
    cancelButtonColor?: string | undefined;
    confirmButtonColor?: string | undefined;
}> & {
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    transition: string;
    closeOnPopstate: boolean;
    allowHtml: boolean;
    showCancelButton: boolean;
    showConfirmButton: boolean;
}>;
export default _default;
