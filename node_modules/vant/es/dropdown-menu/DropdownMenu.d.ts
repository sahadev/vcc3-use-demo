import { InjectionKey, ExtractPropTypes } from 'vue';
import type { DropdownMenuProvide, DropdownMenuDirection } from './types';
declare const dropdownMenuProps: {
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<DropdownMenuDirection>;
        default: DropdownMenuDirection;
    };
    activeColor: StringConstructor;
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
};
export declare type DropdownMenuProps = ExtractPropTypes<typeof dropdownMenuProps>;
export declare const DROPDOWN_KEY: InjectionKey<DropdownMenuProvide>;
declare const _default: import("vue").DefineComponent<{
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<DropdownMenuDirection>;
        default: DropdownMenuDirection;
    };
    activeColor: StringConstructor;
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    overlay?: unknown;
    zIndex?: unknown;
    duration?: unknown;
    direction?: unknown;
    activeColor?: unknown;
    closeOnClickOutside?: unknown;
    closeOnClickOverlay?: unknown;
} & {
    overlay: boolean;
    duration: string | number;
    closeOnClickOverlay: boolean;
    direction: DropdownMenuDirection;
    closeOnClickOutside: boolean;
} & {
    zIndex?: string | number | undefined;
    activeColor?: string | undefined;
}>, {
    overlay: boolean;
    duration: string | number;
    closeOnClickOverlay: boolean;
    direction: DropdownMenuDirection;
    closeOnClickOutside: boolean;
}>;
export default _default;
