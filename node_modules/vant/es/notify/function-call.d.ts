import { App } from 'vue';
import { ComponentInstance } from '../utils';
import type { NotifyMessage, NotifyOptions } from './types';
declare function Notify(options: NotifyMessage | NotifyOptions): ComponentInstance | undefined;
declare namespace Notify {
    var clear: () => void;
    var currentOptions: NotifyOptions;
    var setDefaultOptions: (options: NotifyOptions) => void;
    var resetDefaultOptions: () => void;
    var Component: import("../utils").WithInstall<import("vue").DefineComponent<{
        show: BooleanConstructor;
        zIndex: (NumberConstructor | StringConstructor)[];
        overlay: {
            type: BooleanConstructor;
            default: true;
        };
        duration: (NumberConstructor | StringConstructor)[];
        teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
        lockScroll: {
            type: BooleanConstructor;
            default: true;
        };
        lazyRender: {
            type: BooleanConstructor;
            default: true;
        };
        beforeClose: import("vue").PropType<import("../utils").Interceptor>;
        overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
        overlayClass: import("vue").PropType<unknown>;
        transitionAppear: BooleanConstructor;
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: true;
        };
    } & {
        type: {
            type: import("vue").PropType<import("./types").NotifyType>;
            default: import("./types").NotifyType;
        };
        color: StringConstructor;
        message: (NumberConstructor | StringConstructor)[];
        className: import("vue").PropType<unknown>;
        background: StringConstructor;
        lockScroll: BooleanConstructor;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:show"[], "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
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
        type?: unknown;
        color?: unknown;
        message?: unknown;
        className?: unknown;
        background?: unknown;
    } & {
        type: import("./types").NotifyType;
        overlay: boolean;
        show: boolean;
        lockScroll: boolean;
        lazyRender: boolean;
        transitionAppear: boolean;
        closeOnClickOverlay: boolean;
    } & {
        message?: string | number | undefined;
        color?: string | undefined;
        zIndex?: string | number | undefined;
        duration?: string | number | undefined;
        teleport?: string | import("vue").RendererElement | null | undefined;
        beforeClose?: import("../utils").Interceptor | undefined;
        overlayStyle?: import("vue").CSSProperties | undefined;
        overlayClass?: unknown;
        className?: unknown;
        background?: string | undefined;
    }> & {
        "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    }, {
        type: import("./types").NotifyType;
        overlay: boolean;
        show: boolean;
        lockScroll: boolean;
        lazyRender: boolean;
        transitionAppear: boolean;
        closeOnClickOverlay: boolean;
    }>>;
    var install: (app: App<any>) => void;
}
export { Notify };
