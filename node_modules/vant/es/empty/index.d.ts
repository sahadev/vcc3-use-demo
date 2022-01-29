export declare const Empty: import("../utils").WithInstall<import("vue").DefineComponent<{
    image: {
        type: import("vue").PropType<string>;
        default: string;
    };
    imageSize: (NumberConstructor | StringConstructor)[];
    description: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    image?: unknown;
    imageSize?: unknown;
    description?: unknown;
} & {
    image: string;
} & {
    description?: string | undefined;
    imageSize?: string | number | undefined;
}>, {
    image: string;
}>>;
export default Empty;
export type { EmptyProps } from './Empty';
