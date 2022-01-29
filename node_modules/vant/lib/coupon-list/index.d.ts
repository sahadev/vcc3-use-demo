export declare const CouponList: import("../utils").WithInstall<import("vue").DefineComponent<{
    code: {
        type: import("vue").PropType<string>;
        default: string;
    };
    coupons: {
        type: import("vue").PropType<import("..").CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    showCount: {
        type: BooleanConstructor;
        default: true;
    };
    emptyImage: {
        type: import("vue").PropType<string>;
        default: string;
    };
    chosenCoupon: {
        type: NumberConstructor;
        default: number;
    };
    enabledTitle: StringConstructor;
    disabledTitle: StringConstructor;
    disabledCoupons: {
        type: import("vue").PropType<import("..").CouponInfo[]>;
        default: () => never[];
    };
    showExchangeBar: {
        type: BooleanConstructor;
        default: true;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: true;
    };
    closeButtonText: StringConstructor;
    inputPlaceholder: StringConstructor;
    exchangeMinLength: {
        type: NumberConstructor;
        default: number;
    };
    exchangeButtonText: StringConstructor;
    displayedCouponIndex: {
        type: NumberConstructor;
        default: number;
    };
    exchangeButtonLoading: BooleanConstructor;
    exchangeButtonDisabled: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "exchange" | "update:code")[], "change" | "exchange" | "update:code", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    code?: unknown;
    coupons?: unknown;
    currency?: unknown;
    showCount?: unknown;
    emptyImage?: unknown;
    chosenCoupon?: unknown;
    enabledTitle?: unknown;
    disabledTitle?: unknown;
    disabledCoupons?: unknown;
    showExchangeBar?: unknown;
    showCloseButton?: unknown;
    closeButtonText?: unknown;
    inputPlaceholder?: unknown;
    exchangeMinLength?: unknown;
    exchangeButtonText?: unknown;
    displayedCouponIndex?: unknown;
    exchangeButtonLoading?: unknown;
    exchangeButtonDisabled?: unknown;
} & {
    code: string;
    currency: string;
    coupons: import("..").CouponInfo[];
    chosenCoupon: number;
    showCount: boolean;
    emptyImage: string;
    disabledCoupons: import("..").CouponInfo[];
    showExchangeBar: boolean;
    showCloseButton: boolean;
    exchangeMinLength: number;
    displayedCouponIndex: number;
    exchangeButtonLoading: boolean;
    exchangeButtonDisabled: boolean;
} & {
    enabledTitle?: string | undefined;
    disabledTitle?: string | undefined;
    closeButtonText?: string | undefined;
    inputPlaceholder?: string | undefined;
    exchangeButtonText?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onExchange?: ((...args: any[]) => any) | undefined;
    "onUpdate:code"?: ((...args: any[]) => any) | undefined;
}, {
    code: string;
    currency: string;
    coupons: import("..").CouponInfo[];
    chosenCoupon: number;
    showCount: boolean;
    emptyImage: string;
    disabledCoupons: import("..").CouponInfo[];
    showExchangeBar: boolean;
    showCloseButton: boolean;
    exchangeMinLength: number;
    displayedCouponIndex: number;
    exchangeButtonLoading: boolean;
    exchangeButtonDisabled: boolean;
}>>;
export default CouponList;
export type { CouponListProps } from './CouponList';
