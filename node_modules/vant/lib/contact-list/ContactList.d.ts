import { PropType, ExtractPropTypes } from 'vue';
export declare type ContactListItem = {
    id?: number | string;
    tel: number | string;
    name: string;
    isDefault?: boolean;
};
declare const contactListProps: {
    list: PropType<ContactListItem[]>;
    addText: StringConstructor;
    modelValue: PropType<unknown>;
    defaultTagText: StringConstructor;
};
export declare type ContactListProps = ExtractPropTypes<typeof contactListProps>;
declare const _default: import("vue").DefineComponent<{
    list: PropType<ContactListItem[]>;
    addText: StringConstructor;
    modelValue: PropType<unknown>;
    defaultTagText: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:modelValue" | "add" | "edit")[], "select" | "update:modelValue" | "add" | "edit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    list?: unknown;
    addText?: unknown;
    modelValue?: unknown;
    defaultTagText?: unknown;
} & {} & {
    modelValue?: unknown;
    defaultTagText?: string | undefined;
    list?: ContactListItem[] | undefined;
    addText?: string | undefined;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onEdit?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
