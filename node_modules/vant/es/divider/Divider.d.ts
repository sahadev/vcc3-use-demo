import { ExtractPropTypes } from 'vue';
export declare type DividerContentPosition = 'left' | 'center' | 'right';
declare const dividerProps: {
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    contentPosition: {
        type: import("vue").PropType<DividerContentPosition>;
        default: DividerContentPosition;
    };
};
export declare type DividerProps = ExtractPropTypes<typeof dividerProps>;
declare const _default: import("vue").DefineComponent<{
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    contentPosition: {
        type: import("vue").PropType<DividerContentPosition>;
        default: DividerContentPosition;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    dashed?: unknown;
    hairline?: unknown;
    contentPosition?: unknown;
} & {
    dashed: boolean;
    hairline: boolean;
    contentPosition: DividerContentPosition;
} & {}>, {
    dashed: boolean;
    hairline: boolean;
    contentPosition: DividerContentPosition;
}>;
export default _default;
