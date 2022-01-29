export declare const CountDown: import("../utils").WithInstall<import("vue").DefineComponent<{
    time: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    format: {
        type: import("vue").PropType<string>;
        default: string;
    };
    autoStart: {
        type: BooleanConstructor;
        default: true;
    };
    millisecond: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "finish")[], "change" | "finish", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    time?: unknown;
    format?: unknown;
    autoStart?: unknown;
    millisecond?: unknown;
} & {
    time: string | number;
    format: string;
    autoStart: boolean;
    millisecond: boolean;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFinish?: ((...args: any[]) => any) | undefined;
}, {
    time: string | number;
    format: string;
    autoStart: boolean;
    millisecond: boolean;
}>>;
export default CountDown;
export type { CountDownProps } from './CountDown';
export type { CountDownInstance, CountDownCurrentTime } from './types';
