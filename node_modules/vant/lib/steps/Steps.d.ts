import { ExtractPropTypes, InjectionKey } from 'vue';
export declare type StepsDirection = 'horizontal' | 'vertical';
declare const stepsProps: {
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<StepsDirection>;
        default: StepsDirection;
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
};
export declare type StepsProps = ExtractPropTypes<typeof stepsProps>;
export declare type StepsProvide = {
    props: StepsProps;
    onClickStep: (index: number) => void;
};
export declare const STEPS_KEY: InjectionKey<StepsProvide>;
declare const _default: import("vue").DefineComponent<{
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<StepsDirection>;
        default: StepsDirection;
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
    direction: StepsDirection;
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
    direction: StepsDirection;
    activeIcon: string;
}>;
export default _default;
