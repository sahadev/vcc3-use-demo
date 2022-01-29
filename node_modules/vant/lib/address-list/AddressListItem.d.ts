import { PropType } from 'vue';
export declare type AddressListAddress = {
    id: number | string;
    tel: number | string;
    name: string;
    address: string;
    isDefault?: boolean;
};
declare const _default: import("vue").DefineComponent<{
    address: {
        type: PropType<AddressListAddress>;
        required: true;
    };
    disabled: BooleanConstructor;
    switchable: BooleanConstructor;
    defaultTagText: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "click" | "edit")[], "select" | "click" | "edit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    address?: unknown;
    disabled?: unknown;
    switchable?: unknown;
    defaultTagText?: unknown;
} & {
    address: AddressListAddress;
    disabled: boolean;
    switchable: boolean;
} & {
    defaultTagText?: string | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    onEdit?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    switchable: boolean;
}>;
export default _default;
