export declare const ContactEdit: import("../utils").WithInstall<import("vue").DefineComponent<{
    isEdit: BooleanConstructor;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    showSetDefault: BooleanConstructor;
    setDefaultLabel: StringConstructor;
    contactInfo: {
        type: import("vue").PropType<import("./ContactEdit").ContactEditInfo>;
        default: () => import("./ContactEdit").ContactEditInfo;
    };
    telValidator: {
        type: import("vue").PropType<(val: string) => boolean>;
        default: typeof import("../utils").isMobile;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("save" | "delete" | "change-default")[], "save" | "delete" | "change-default", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    isEdit?: unknown;
    isSaving?: unknown;
    isDeleting?: unknown;
    showSetDefault?: unknown;
    setDefaultLabel?: unknown;
    contactInfo?: unknown;
    telValidator?: unknown;
} & {
    isSaving: boolean;
    isDeleting: boolean;
    showSetDefault: boolean;
    telValidator: (val: string) => boolean;
    isEdit: boolean;
    contactInfo: import("./ContactEdit").ContactEditInfo;
} & {
    setDefaultLabel?: string | undefined;
}> & {
    onSave?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    "onChange-default"?: ((...args: any[]) => any) | undefined;
}, {
    isSaving: boolean;
    isDeleting: boolean;
    showSetDefault: boolean;
    telValidator: (val: string) => boolean;
    isEdit: boolean;
    contactInfo: import("./ContactEdit").ContactEditInfo;
}>>;
export default ContactEdit;
export type { ContactEditInfo, ContactEditProps } from './ContactEdit';
