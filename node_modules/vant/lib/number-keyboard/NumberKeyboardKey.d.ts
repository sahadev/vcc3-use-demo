import { PropType } from 'vue';
export declare type KeyType = '' | 'delete' | 'extra' | 'close';
declare const _default: import("vue").DefineComponent<{
    type: PropType<KeyType>;
    text: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    wider: BooleanConstructor;
    large: BooleanConstructor;
    loading: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "press"[], "press", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    type?: unknown;
    text?: unknown;
    color?: unknown;
    wider?: unknown;
    large?: unknown;
    loading?: unknown;
} & {
    large: boolean;
    loading: boolean;
    wider: boolean;
} & {
    text?: string | number | undefined;
    type?: KeyType | undefined;
    color?: string | undefined;
}> & {
    onPress?: ((...args: any[]) => any) | undefined;
}, {
    large: boolean;
    loading: boolean;
    wider: boolean;
}>;
export default _default;
