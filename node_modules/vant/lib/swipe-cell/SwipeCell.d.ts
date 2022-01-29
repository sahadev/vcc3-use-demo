import { PropType, ExtractPropTypes } from 'vue';
import { Interceptor } from '../utils';
declare const swipeCellProps: {
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    leftWidth: (NumberConstructor | StringConstructor)[];
    rightWidth: (NumberConstructor | StringConstructor)[];
    beforeClose: PropType<Interceptor>;
    stopPropagation: BooleanConstructor;
};
export declare type SwipeCellProps = ExtractPropTypes<typeof swipeCellProps>;
declare const _default: import("vue").DefineComponent<{
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    leftWidth: (NumberConstructor | StringConstructor)[];
    rightWidth: (NumberConstructor | StringConstructor)[];
    beforeClose: PropType<Interceptor>;
    stopPropagation: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "click" | "close")[], "open" | "click" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    name?: unknown;
    disabled?: unknown;
    leftWidth?: unknown;
    rightWidth?: unknown;
    beforeClose?: unknown;
    stopPropagation?: unknown;
} & {
    name: string | number;
    disabled: boolean;
    stopPropagation: boolean;
} & {
    beforeClose?: Interceptor | undefined;
    leftWidth?: string | number | undefined;
    rightWidth?: string | number | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    name: string | number;
    disabled: boolean;
    stopPropagation: boolean;
}>;
export default _default;
