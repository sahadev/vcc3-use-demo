export declare const Image: import("../utils").WithInstall<import("vue").DefineComponent<{
    src: StringConstructor;
    alt: StringConstructor;
    fit: import("vue").PropType<import("./Image").ImageFit>;
    round: BooleanConstructor;
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    radius: (NumberConstructor | StringConstructor)[];
    lazyLoad: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    showError: {
        type: BooleanConstructor;
        default: true;
    };
    errorIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    iconPrefix: StringConstructor;
    showLoading: {
        type: BooleanConstructor;
        default: true;
    };
    loadingIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "load")[], "error" | "load", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    src?: unknown;
    alt?: unknown;
    fit?: unknown;
    round?: unknown;
    width?: unknown;
    height?: unknown;
    radius?: unknown;
    lazyLoad?: unknown;
    iconSize?: unknown;
    showError?: unknown;
    errorIcon?: unknown;
    iconPrefix?: unknown;
    showLoading?: unknown;
    loadingIcon?: unknown;
} & {
    round: boolean;
    showError: boolean;
    lazyLoad: boolean;
    errorIcon: string;
    showLoading: boolean;
    loadingIcon: string;
} & {
    width?: string | number | undefined;
    height?: string | number | undefined;
    iconPrefix?: string | undefined;
    alt?: string | undefined;
    src?: string | undefined;
    iconSize?: string | number | undefined;
    fit?: import("./Image").ImageFit | undefined;
    radius?: string | number | undefined;
}> & {
    onLoad?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}, {
    round: boolean;
    showError: boolean;
    lazyLoad: boolean;
    errorIcon: string;
    showLoading: boolean;
    loadingIcon: string;
}>>;
export default Image;
export type { ImageFit, ImageProps } from './Image';
