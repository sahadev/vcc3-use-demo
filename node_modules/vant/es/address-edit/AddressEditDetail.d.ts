import { PropType } from 'vue';
import type { AddressEditSearchItem } from './types';
import type { FieldRule } from '../field/types';
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    rows: (NumberConstructor | StringConstructor)[];
    value: StringConstructor;
    rules: PropType<FieldRule[]>;
    focused: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    searchResult: PropType<AddressEditSearchItem[]>;
    showSearchResult: BooleanConstructor;
}, () => JSX.Element | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "focus" | "blur" | "select-search")[], "input" | "focus" | "blur" | "select-search", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show?: unknown;
    rows?: unknown;
    value?: unknown;
    rules?: unknown;
    focused?: unknown;
    maxlength?: unknown;
    searchResult?: unknown;
    showSearchResult?: unknown;
} & {
    focused: boolean;
    show: boolean;
    showSearchResult: boolean;
} & {
    value?: string | undefined;
    maxlength?: string | number | undefined;
    rows?: string | number | undefined;
    rules?: FieldRule[] | undefined;
    searchResult?: AddressEditSearchItem[] | undefined;
}> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onSelect-search"?: ((...args: any[]) => any) | undefined;
}, {
    focused: boolean;
    show: boolean;
    showSearchResult: boolean;
}>;
export default _default;
