import { PropType, InjectionKey, ExtractPropTypes } from 'vue';
import { Interceptor } from '../utils';
declare const tabbarProps: {
    route: BooleanConstructor;
    fixed: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    placeholder: BooleanConstructor;
    activeColor: StringConstructor;
    beforeChange: PropType<Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: PropType<boolean | null>;
        default: null;
    };
};
export declare type TabbarProps = ExtractPropTypes<typeof tabbarProps>;
export declare type TabbarProvide = {
    props: TabbarProps;
    setActive: (active: number | string, afterChange: () => void) => void;
};
export declare const TABBAR_KEY: InjectionKey<TabbarProvide>;
declare const _default: import("vue").DefineComponent<{
    route: BooleanConstructor;
    fixed: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    placeholder: BooleanConstructor;
    activeColor: StringConstructor;
    beforeChange: PropType<Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: PropType<boolean | null>;
        default: null;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    route?: unknown;
    fixed?: unknown;
    border?: unknown;
    zIndex?: unknown;
    placeholder?: unknown;
    activeColor?: unknown;
    beforeChange?: unknown;
    inactiveColor?: unknown;
    modelValue?: unknown;
    safeAreaInsetBottom?: unknown;
} & {
    fixed: boolean;
    border: boolean;
    modelValue: string | number;
    placeholder: boolean;
    safeAreaInsetBottom: boolean | null;
    route: boolean;
} & {
    zIndex?: string | number | undefined;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    beforeChange?: Interceptor | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    fixed: boolean;
    border: boolean;
    modelValue: string | number;
    placeholder: boolean;
    safeAreaInsetBottom: boolean | null;
    route: boolean;
}>;
export default _default;
