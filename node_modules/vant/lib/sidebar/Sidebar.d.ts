import { InjectionKey, ExtractPropTypes } from 'vue';
export declare type SidebarProvide = {
    getActive: () => number;
    setActive: (value: number) => void;
};
export declare const SIDEBAR_KEY: InjectionKey<SidebarProvide>;
declare const sidebarProps: {
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export declare type SidebarProps = ExtractPropTypes<typeof sidebarProps>;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
} & {
    modelValue: string | number;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
}>;
export default _default;
