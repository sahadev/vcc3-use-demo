export declare const ContactList: import("../utils").WithInstall<import("vue").DefineComponent<{
    list: import("vue").PropType<import("./ContactList").ContactListItem[]>;
    addText: StringConstructor;
    modelValue: import("vue").PropType<unknown>;
    defaultTagText: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:modelValue" | "add" | "edit")[], "select" | "update:modelValue" | "add" | "edit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    list?: unknown;
    addText?: unknown;
    modelValue?: unknown;
    defaultTagText?: unknown;
} & {} & {
    modelValue?: unknown;
    defaultTagText?: string | undefined;
    list?: import("./ContactList").ContactListItem[] | undefined;
    addText?: string | undefined;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onEdit?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
}, {}>>;
export default ContactList;
export type { ContactListItem, ContactListProps } from './ContactList';
