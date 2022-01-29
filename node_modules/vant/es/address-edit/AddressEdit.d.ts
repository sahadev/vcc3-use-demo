import { PropType, ExtractPropTypes } from 'vue';
import { isMobile } from '../utils';
import { AreaList } from '../area';
import type { AddressEditInfo, AddressEditSearchItem } from './types';
declare const addressEditProps: {
    areaList: PropType<AreaList>;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    validator: PropType<(key: string, value: string) => string | undefined>;
    showArea: {
        type: BooleanConstructor;
        default: true;
    };
    showDetail: {
        type: BooleanConstructor;
        default: true;
    };
    showDelete: BooleanConstructor;
    showPostal: BooleanConstructor;
    disableArea: BooleanConstructor;
    searchResult: PropType<AddressEditSearchItem[]>;
    telMaxlength: (NumberConstructor | StringConstructor)[];
    showSetDefault: BooleanConstructor;
    saveButtonText: StringConstructor;
    areaPlaceholder: StringConstructor;
    deleteButtonText: StringConstructor;
    showSearchResult: BooleanConstructor;
    detailRows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    detailMaxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    areaColumnsPlaceholder: {
        type: PropType<string[]>;
        default: () => never[];
    };
    addressInfo: {
        type: PropType<Partial<AddressEditInfo>>;
        default: () => AddressEditInfo;
    };
    telValidator: {
        type: PropType<(val: string) => boolean>;
        default: typeof isMobile;
    };
    postalValidator: {
        type: PropType<(val: string) => boolean>;
        default: (value: string) => boolean;
    };
};
export declare type AddressEditProps = ExtractPropTypes<typeof addressEditProps>;
declare const _default: import("vue").DefineComponent<{
    areaList: PropType<AreaList>;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    validator: PropType<(key: string, value: string) => string | undefined>;
    showArea: {
        type: BooleanConstructor;
        default: true;
    };
    showDetail: {
        type: BooleanConstructor;
        default: true;
    };
    showDelete: BooleanConstructor;
    showPostal: BooleanConstructor;
    disableArea: BooleanConstructor;
    searchResult: PropType<AddressEditSearchItem[]>;
    telMaxlength: (NumberConstructor | StringConstructor)[];
    showSetDefault: BooleanConstructor;
    saveButtonText: StringConstructor;
    areaPlaceholder: StringConstructor;
    deleteButtonText: StringConstructor;
    showSearchResult: BooleanConstructor;
    detailRows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    detailMaxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    areaColumnsPlaceholder: {
        type: PropType<string[]>;
        default: () => never[];
    };
    addressInfo: {
        type: PropType<Partial<AddressEditInfo>>;
        default: () => AddressEditInfo;
    };
    telValidator: {
        type: PropType<(val: string) => boolean>;
        default: typeof isMobile;
    };
    postalValidator: {
        type: PropType<(val: string) => boolean>;
        default: (value: string) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "select-search" | "save" | "delete" | "click-area" | "change-area" | "change-detail" | "change-default")[], "focus" | "select-search" | "save" | "delete" | "click-area" | "change-area" | "change-detail" | "change-default", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    areaList?: unknown;
    isSaving?: unknown;
    isDeleting?: unknown;
    validator?: unknown;
    showArea?: unknown;
    showDetail?: unknown;
    showDelete?: unknown;
    showPostal?: unknown;
    disableArea?: unknown;
    searchResult?: unknown;
    telMaxlength?: unknown;
    showSetDefault?: unknown;
    saveButtonText?: unknown;
    areaPlaceholder?: unknown;
    deleteButtonText?: unknown;
    showSearchResult?: unknown;
    detailRows?: unknown;
    detailMaxlength?: unknown;
    areaColumnsPlaceholder?: unknown;
    addressInfo?: unknown;
    telValidator?: unknown;
    postalValidator?: unknown;
} & {
    isSaving: boolean;
    isDeleting: boolean;
    showArea: boolean;
    showDetail: boolean;
    showDelete: boolean;
    showPostal: boolean;
    disableArea: boolean;
    showSetDefault: boolean;
    showSearchResult: boolean;
    detailRows: string | number;
    detailMaxlength: string | number;
    areaColumnsPlaceholder: string[];
    addressInfo: Partial<AddressEditInfo>;
    telValidator: (val: string) => boolean;
    postalValidator: (val: string) => boolean;
} & {
    areaList?: AreaList | undefined;
    validator?: ((key: string, value: string) => string | undefined) | undefined;
    searchResult?: AddressEditSearchItem[] | undefined;
    telMaxlength?: string | number | undefined;
    saveButtonText?: string | undefined;
    areaPlaceholder?: string | undefined;
    deleteButtonText?: string | undefined;
}> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    "onSelect-search"?: ((...args: any[]) => any) | undefined;
    onSave?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    "onClick-area"?: ((...args: any[]) => any) | undefined;
    "onChange-area"?: ((...args: any[]) => any) | undefined;
    "onChange-detail"?: ((...args: any[]) => any) | undefined;
    "onChange-default"?: ((...args: any[]) => any) | undefined;
}, {
    isSaving: boolean;
    isDeleting: boolean;
    showArea: boolean;
    showDetail: boolean;
    showDelete: boolean;
    showPostal: boolean;
    disableArea: boolean;
    showSetDefault: boolean;
    showSearchResult: boolean;
    detailRows: string | number;
    detailMaxlength: string | number;
    areaColumnsPlaceholder: string[];
    addressInfo: Partial<AddressEditInfo>;
    telValidator: (val: string) => boolean;
    postalValidator: (val: string) => boolean;
}>;
export default _default;
