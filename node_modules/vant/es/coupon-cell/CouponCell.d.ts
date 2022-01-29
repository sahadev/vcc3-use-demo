import { ExtractPropTypes } from 'vue';
import type { CouponInfo } from '../coupon';
declare const couponCellProps: {
    title: StringConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    editable: {
        type: BooleanConstructor;
        default: true;
    };
    coupons: {
        type: import("vue").PropType<CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    chosenCoupon: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export declare type CouponCellProps = ExtractPropTypes<typeof couponCellProps>;
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    editable: {
        type: BooleanConstructor;
        default: true;
    };
    coupons: {
        type: import("vue").PropType<CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    chosenCoupon: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    title?: unknown;
    border?: unknown;
    editable?: unknown;
    coupons?: unknown;
    currency?: unknown;
    chosenCoupon?: unknown;
} & {
    border: boolean;
    currency: string;
    editable: boolean;
    coupons: CouponInfo[];
    chosenCoupon: string | number;
} & {
    title?: string | undefined;
}>, {
    border: boolean;
    currency: string;
    editable: boolean;
    coupons: CouponInfo[];
    chosenCoupon: string | number;
}>;
export default _default;
