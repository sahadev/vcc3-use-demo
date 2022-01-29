import { PropType, CSSProperties } from 'vue';
import { Interceptor } from '../utils';
export declare const popupSharedProps: {
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
    beforeClose: PropType<Interceptor>;
    overlayStyle: PropType<CSSProperties>;
    overlayClass: PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
};
export declare type PopupSharedPropKeys = Array<keyof typeof popupSharedProps>;
export declare const popupSharedPropKeys: PopupSharedPropKeys;
