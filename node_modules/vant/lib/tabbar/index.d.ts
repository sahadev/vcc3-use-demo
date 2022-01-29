export declare const Tabbar: import("../utils").WithInstall<import("vue").DefineComponent<{
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
    beforeChange: import("vue").PropType<import("../utils").Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: import("vue").PropType<boolean | null>;
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
    beforeChange?: import("../utils").Interceptor | undefined;
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
}>>;
export default Tabbar;
export type { TabbarProps } from './Tabbar';
