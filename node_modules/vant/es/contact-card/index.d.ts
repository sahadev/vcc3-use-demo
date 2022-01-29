export declare const ContactCard: import("../utils").WithInstall<import("vue").DefineComponent<{
    tel: StringConstructor;
    name: StringConstructor;
    type: {
        type: import("vue").PropType<import("./ContactCard").ContactCardType>;
        default: import("./ContactCard").ContactCardType;
    };
    addText: StringConstructor;
    editable: {
        type: BooleanConstructor;
        default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    tel?: unknown;
    name?: unknown;
    type?: unknown;
    addText?: unknown;
    editable?: unknown;
} & {
    type: import("./ContactCard").ContactCardType;
    editable: boolean;
} & {
    tel?: string | undefined;
    name?: string | undefined;
    addText?: string | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./ContactCard").ContactCardType;
    editable: boolean;
}>>;
export default ContactCard;
export type { ContactCardType, ContactCardProps } from './ContactCard';
