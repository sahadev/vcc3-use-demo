export declare const Divider: import("../utils").WithInstall<import("vue").DefineComponent<{
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    contentPosition: {
        type: import("vue").PropType<import("./Divider").DividerContentPosition>;
        default: import("./Divider").DividerContentPosition;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    dashed?: unknown;
    hairline?: unknown;
    contentPosition?: unknown;
} & {
    dashed: boolean;
    hairline: boolean;
    contentPosition: import("./Divider").DividerContentPosition;
} & {}>, {
    dashed: boolean;
    hairline: boolean;
    contentPosition: import("./Divider").DividerContentPosition;
}>>;
export default Divider;
export type { DividerProps, DividerContentPosition } from './Divider';
