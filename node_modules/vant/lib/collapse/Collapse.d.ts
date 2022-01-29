import { PropType, InjectionKey, ExtractPropTypes } from 'vue';
export declare type CollapseProvide = {
    toggle: (name: number | string, expanded: boolean) => void;
    isExpanded: (name: number | string) => boolean;
};
export declare const COLLAPSE_KEY: InjectionKey<CollapseProvide>;
declare const collapseProps: {
    border: {
        type: BooleanConstructor;
        default: true;
    };
    accordion: BooleanConstructor;
    modelValue: {
        type: PropType<string | number | (string | number)[]>;
        default: string;
    };
};
export declare type CollapseProps = ExtractPropTypes<typeof collapseProps>;
declare const _default: import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: true;
    };
    accordion: BooleanConstructor;
    modelValue: {
        type: PropType<string | number | (string | number)[]>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    border?: unknown;
    accordion?: unknown;
    modelValue?: unknown;
} & {
    border: boolean;
    modelValue: string | number | (string | number)[];
    accordion: boolean;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    border: boolean;
    modelValue: string | number | (string | number)[];
    accordion: boolean;
}>;
export default _default;
