export declare const ConfigProvider: import("../utils").WithInstall<import("vue").DefineComponent<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    themeVars: import("vue").PropType<Record<string, string | number>>;
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
}>>;
export default ConfigProvider;
export type { ConfigProviderProps } from './ConfigProvider';
