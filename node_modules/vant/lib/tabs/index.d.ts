import { TabsProps } from './Tabs';
export declare const Tabs: import("../utils").WithInstall<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./types").TabsType>;
        default: import("./types").TabsType;
    };
    color: StringConstructor;
    border: BooleanConstructor;
    sticky: BooleanConstructor;
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animated: BooleanConstructor;
    ellipsis: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: BooleanConstructor;
    scrollspy: BooleanConstructor;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    background: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    lineWidth: (NumberConstructor | StringConstructor)[];
    lineHeight: (NumberConstructor | StringConstructor)[];
    beforeChange: import("vue").PropType<import("../utils").Interceptor>;
    swipeThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleActiveColor: StringConstructor;
    titleInactiveColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "disabled" | "click" | "change" | "rendered" | "click-tab" | "update:active")[], "scroll" | "disabled" | "click" | "change" | "rendered" | "click-tab" | "update:active", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    type?: unknown;
    color?: unknown;
    border?: unknown;
    sticky?: unknown;
    active?: unknown;
    duration?: unknown;
    animated?: unknown;
    ellipsis?: unknown;
    swipeable?: unknown;
    scrollspy?: unknown;
    offsetTop?: unknown;
    background?: unknown;
    lazyRender?: unknown;
    lineWidth?: unknown;
    lineHeight?: unknown;
    beforeChange?: unknown;
    swipeThreshold?: unknown;
    titleActiveColor?: unknown;
    titleInactiveColor?: unknown;
} & {
    type: import("./types").TabsType;
    border: boolean;
    ellipsis: boolean;
    sticky: boolean;
    active: string | number;
    duration: string | number;
    lazyRender: boolean;
    offsetTop: string | number;
    animated: boolean;
    swipeable: boolean;
    scrollspy: boolean;
    swipeThreshold: string | number;
} & {
    color?: string | undefined;
    background?: string | undefined;
    lineWidth?: string | number | undefined;
    lineHeight?: string | number | undefined;
    beforeChange?: import("../utils").Interceptor | undefined;
    titleActiveColor?: string | undefined;
    titleInactiveColor?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onScroll?: ((...args: any[]) => any) | undefined;
    onDisabled?: ((...args: any[]) => any) | undefined;
    onRendered?: ((...args: any[]) => any) | undefined;
    "onClick-tab"?: ((...args: any[]) => any) | undefined;
    "onUpdate:active"?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./types").TabsType;
    border: boolean;
    ellipsis: boolean;
    sticky: boolean;
    active: string | number;
    duration: string | number;
    lazyRender: boolean;
    offsetTop: string | number;
    animated: boolean;
    swipeable: boolean;
    scrollspy: boolean;
    swipeThreshold: string | number;
}>>;
export default Tabs;
export type { TabsProps };
export type { TabsType, TabsInstance } from './types';
