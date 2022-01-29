import { PropType, ExtractPropTypes } from 'vue';
import type { CascaderOption, CascaderFieldNames } from './types';
declare const cascaderProps: {
    title: StringConstructor;
    options: {
        type: PropType<CascaderOption[]>;
        default: () => never[];
    };
    closeable: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: {
        type: BooleanConstructor;
        default: true;
    };
    closeIcon: {
        type: PropType<string>;
        default: string;
    };
    modelValue: (NumberConstructor | StringConstructor)[];
    fieldNames: PropType<CascaderFieldNames>;
    placeholder: StringConstructor;
    activeColor: StringConstructor;
};
export declare type CascaderProps = ExtractPropTypes<typeof cascaderProps>;
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    options: {
        type: PropType<CascaderOption[]>;
        default: () => never[];
    };
    closeable: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: {
        type: BooleanConstructor;
        default: true;
    };
    closeIcon: {
        type: PropType<string>;
        default: string;
    };
    modelValue: (NumberConstructor | StringConstructor)[];
    fieldNames: PropType<CascaderFieldNames>;
    placeholder: StringConstructor;
    activeColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "close" | "click-tab" | "finish")[], "update:modelValue" | "change" | "close" | "click-tab" | "finish", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    title?: unknown;
    options?: unknown;
    closeable?: unknown;
    swipeable?: unknown;
    closeIcon?: unknown;
    modelValue?: unknown;
    fieldNames?: unknown;
    placeholder?: unknown;
    activeColor?: unknown;
} & {
    closeIcon: string;
    closeable: boolean;
    options: CascaderOption[];
    swipeable: boolean;
} & {
    title?: string | undefined;
    modelValue?: string | number | undefined;
    placeholder?: string | undefined;
    activeColor?: string | undefined;
    fieldNames?: CascaderFieldNames | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onClick-tab"?: ((...args: any[]) => any) | undefined;
    onFinish?: ((...args: any[]) => any) | undefined;
}, {
    closeIcon: string;
    closeable: boolean;
    options: CascaderOption[];
    swipeable: boolean;
}>;
export default _default;
