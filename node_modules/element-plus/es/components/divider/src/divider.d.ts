import type { ExtractPropTypes } from 'vue';
export declare type BorderStyle = CSSStyleDeclaration['borderStyle'];
export declare const dividerProps: {
    readonly direction: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "horizontal", unknown, "horizontal" | "vertical", unknown>;
    readonly contentPosition: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "center", unknown, "right" | "left" | "center", unknown>;
    readonly borderStyle: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string>, "solid", unknown, unknown, unknown>;
};
export declare type DividerProps = ExtractPropTypes<typeof dividerProps>;
