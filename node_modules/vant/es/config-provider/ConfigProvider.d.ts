import { PropType, InjectionKey, ExtractPropTypes } from 'vue';
export declare type ConfigProviderProvide = {
    iconPrefix?: string;
};
export declare const CONFIG_PROVIDER_KEY: InjectionKey<ConfigProviderProvide>;
declare const configProviderProps: {
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    themeVars: PropType<Record<string, string | number>>;
    iconPrefix: StringConstructor;
};
export declare type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    themeVars: PropType<Record<string, string | number>>;
    iconPrefix: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    tag?: unknown;
    themeVars?: unknown;
    iconPrefix?: unknown;
} & {
    tag: keyof HTMLElementTagNameMap;
} & {
    themeVars?: Record<string, string | number> | undefined;
    iconPrefix?: string | undefined;
}>, {
    tag: keyof HTMLElementTagNameMap;
}>;
export default _default;
