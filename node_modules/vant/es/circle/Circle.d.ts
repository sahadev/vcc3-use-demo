import { PropType, ExtractPropTypes } from 'vue';
export declare type CircleStartPosition = 'top' | 'right' | 'bottom' | 'left';
declare const circleProps: {
    text: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    fill: {
        type: PropType<string>;
        default: string;
    };
    rate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    color: PropType<string | Record<string, string>>;
    clockwise: {
        type: BooleanConstructor;
        default: true;
    };
    layerColor: StringConstructor;
    currentRate: {
        type: NumberConstructor;
        default: number;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    strokeLinecap: PropType<CanvasLineCap>;
    startPosition: {
        type: PropType<CircleStartPosition>;
        default: CircleStartPosition;
    };
};
export declare type CircleProps = ExtractPropTypes<typeof circleProps>;
declare const _default: import("vue").DefineComponent<{
    text: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    fill: {
        type: PropType<string>;
        default: string;
    };
    rate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    color: PropType<string | Record<string, string>>;
    clockwise: {
        type: BooleanConstructor;
        default: true;
    };
    layerColor: StringConstructor;
    currentRate: {
        type: NumberConstructor;
        default: number;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    strokeLinecap: PropType<CanvasLineCap>;
    startPosition: {
        type: PropType<CircleStartPosition>;
        default: CircleStartPosition;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:currentRate"[], "update:currentRate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    text?: unknown;
    size?: unknown;
    fill?: unknown;
    rate?: unknown;
    speed?: unknown;
    color?: unknown;
    clockwise?: unknown;
    layerColor?: unknown;
    currentRate?: unknown;
    strokeWidth?: unknown;
    strokeLinecap?: unknown;
    startPosition?: unknown;
} & {
    fill: string;
    strokeWidth: string | number;
    rate: string | number;
    speed: string | number;
    clockwise: boolean;
    currentRate: number;
    startPosition: CircleStartPosition;
} & {
    text?: string | undefined;
    color?: string | Record<string, string> | undefined;
    size?: string | number | undefined;
    strokeLinecap?: CanvasLineCap | undefined;
    layerColor?: string | undefined;
}> & {
    "onUpdate:currentRate"?: ((...args: any[]) => any) | undefined;
}, {
    fill: string;
    strokeWidth: string | number;
    rate: string | number;
    speed: string | number;
    clockwise: boolean;
    currentRate: number;
    startPosition: CircleStartPosition;
}>;
export default _default;
