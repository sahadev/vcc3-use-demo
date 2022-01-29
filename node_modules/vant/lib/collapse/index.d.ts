export declare const Collapse: import("../utils").WithInstall<import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: true;
    };
    accordion: BooleanConstructor;
    modelValue: {
        type: import("vue").PropType<string | number | (string | number)[]>;
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
}>>;
export default Collapse;
export type { CollapseProps } from './Collapse';
