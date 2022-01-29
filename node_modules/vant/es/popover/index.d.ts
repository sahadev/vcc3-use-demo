export declare const Popover: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    theme: {
        type: import("vue").PropType<import("./types").PopoverTheme>;
        default: import("./types").PopoverTheme;
    };
    overlay: BooleanConstructor;
    actions: {
        type: import("vue").PropType<import("./types").PopoverAction[]>;
        default: () => never[];
    };
    trigger: {
        type: import("vue").PropType<import("./types").PopoverTrigger>;
        default: import("./types").PopoverTrigger;
    };
    duration: (NumberConstructor | StringConstructor)[];
    showArrow: {
        type: BooleanConstructor;
        default: true;
    };
    placement: {
        type: import("vue").PropType<import("./types").PopoverPlacement>;
        default: import("./types").PopoverPlacement;
    };
    iconPrefix: StringConstructor;
    overlayClass: import("vue").PropType<unknown>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    closeOnClickAction: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        default: () => number[];
    };
    teleport: {
        type: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "touchstart" | "update:show")[], "select" | "touchstart" | "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show?: unknown;
    theme?: unknown;
    overlay?: unknown;
    actions?: unknown;
    trigger?: unknown;
    duration?: unknown;
    showArrow?: unknown;
    placement?: unknown;
    iconPrefix?: unknown;
    overlayClass?: unknown;
    overlayStyle?: unknown;
    closeOnClickAction?: unknown;
    closeOnClickOverlay?: unknown;
    closeOnClickOutside?: unknown;
    offset?: unknown;
    teleport?: unknown;
} & {
    offset: [number, number];
    overlay: boolean;
    show: boolean;
    teleport: string | import("vue").RendererElement | null | undefined;
    closeOnClickOverlay: boolean;
    actions: import("./types").PopoverAction[];
    closeOnClickAction: boolean;
    theme: import("./types").PopoverTheme;
    closeOnClickOutside: boolean;
    trigger: import("./types").PopoverTrigger;
    showArrow: boolean;
    placement: import("./types").PopoverPlacement;
} & {
    iconPrefix?: string | undefined;
    duration?: string | number | undefined;
    overlayStyle?: import("vue").CSSProperties | undefined;
    overlayClass?: unknown;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onTouchstart?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
}, {
    offset: [number, number];
    overlay: boolean;
    show: boolean;
    teleport: string | import("vue").RendererElement | null | undefined;
    closeOnClickOverlay: boolean;
    actions: import("./types").PopoverAction[];
    closeOnClickAction: boolean;
    theme: import("./types").PopoverTheme;
    closeOnClickOutside: boolean;
    trigger: import("./types").PopoverTrigger;
    showArrow: boolean;
    placement: import("./types").PopoverPlacement;
}>>;
export default Popover;
export type { PopoverProps } from './Popover';
export type { PopoverTheme, PopoverAction, PopoverTrigger, PopoverPlacement, } from './types';
