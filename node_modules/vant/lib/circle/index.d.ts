export declare const Circle: import("../utils").WithInstall<import("vue").DefineComponent<{
    text: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    fill: {
        type: import("vue").PropType<string>;
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
    color: import("vue").PropType<string | Record<string, string>>;
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
    strokeLinecap: import("vue").PropType<CanvasLineCap>;
    startPosition: {
        type: import("vue").PropType<import("./Circle").CircleStartPosition>;
        default: import("./Circle").CircleStartPosition;
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
    startPosition: import("./Circle").CircleStartPosition;
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
    startPosition: import("./Circle").CircleStartPosition;
}>>;
export default Circle;
export type { CircleProps, CircleStartPosition } from './Circle';
