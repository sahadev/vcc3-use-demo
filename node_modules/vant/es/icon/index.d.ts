export declare const Icon: import("../utils").WithInstall<import("vue").DefineComponent<{
    dot: BooleanConstructor;
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    name: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    classPrefix: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    dot?: unknown;
    tag?: unknown;
    name?: unknown;
    size?: unknown;
    badge?: unknown;
    color?: unknown;
    classPrefix?: unknown;
} & {
    dot: boolean;
    tag: keyof HTMLElementTagNameMap;
} & {
    name?: string | undefined;
    badge?: string | number | undefined;
    color?: string | undefined;
    size?: string | number | undefined;
    classPrefix?: string | undefined;
}>, {
    dot: boolean;
    tag: keyof HTMLElementTagNameMap;
}>>;
export default Icon;
export type { IconProps } from './Icon';
