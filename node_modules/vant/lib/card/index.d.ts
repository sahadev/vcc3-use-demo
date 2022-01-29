export declare const Card: import("../utils").WithInstall<import("vue").DefineComponent<{
    tag: StringConstructor;
    num: (NumberConstructor | StringConstructor)[];
    desc: StringConstructor;
    thumb: StringConstructor;
    title: StringConstructor;
    price: (NumberConstructor | StringConstructor)[];
    centered: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    thumbLink: StringConstructor;
    originPrice: (NumberConstructor | StringConstructor)[];
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-thumb"[], "click-thumb", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    tag?: unknown;
    num?: unknown;
    desc?: unknown;
    thumb?: unknown;
    title?: unknown;
    price?: unknown;
    centered?: unknown;
    lazyLoad?: unknown;
    currency?: unknown;
    thumbLink?: unknown;
    originPrice?: unknown;
} & {
    lazyLoad: boolean;
    centered: boolean;
    currency: string;
} & {
    title?: string | undefined;
    tag?: string | undefined;
    desc?: string | undefined;
    num?: string | number | undefined;
    thumb?: string | undefined;
    price?: string | number | undefined;
    thumbLink?: string | undefined;
    originPrice?: string | number | undefined;
}> & {
    "onClick-thumb"?: ((...args: any[]) => any) | undefined;
}, {
    lazyLoad: boolean;
    centered: boolean;
    currency: string;
}>>;
export default Card;
export type { CardProps } from './Card';
