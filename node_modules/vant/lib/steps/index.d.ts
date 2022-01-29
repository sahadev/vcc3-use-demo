export declare const Steps: import("../utils").WithInstall<import("vue").DefineComponent<{
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<import("./Steps").StepsDirection>;
        default: import("./Steps").StepsDirection;
    };
    activeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    iconPrefix: StringConstructor;
    finishIcon: StringConstructor;
    activeColor: StringConstructor;
    inactiveIcon: StringConstructor;
    inactiveColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-step"[], "click-step", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    active?: unknown;
    direction?: unknown;
    activeIcon?: unknown;
    iconPrefix?: unknown;
    finishIcon?: unknown;
    activeColor?: unknown;
    inactiveIcon?: unknown;
    inactiveColor?: unknown;
} & {
    active: string | number;
    direction: import("./Steps").StepsDirection;
    activeIcon: string;
} & {
    iconPrefix?: string | undefined;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    finishIcon?: string | undefined;
    inactiveIcon?: string | undefined;
}> & {
    "onClick-step"?: ((...args: any[]) => any) | undefined;
}, {
    active: string | number;
    direction: import("./Steps").StepsDirection;
    activeIcon: string;
}>>;
export default Steps;
export type { StepsProps, StepsDirection } from './Steps';
