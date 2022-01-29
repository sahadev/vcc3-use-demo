import type { DropdownItemProps } from './DropdownItem';
import type { VNode, ComponentPublicInstance } from 'vue';
export declare type DropdownItemOption = {
    text: string;
    icon?: string;
    value: number | string;
};
export declare type DropdownItemExpose = {
    toggle: (show?: boolean, options?: {
        immediate?: boolean;
    }) => void;
    /** @private */
    state: {
        showPopup: boolean;
        transition: boolean;
        showWrapper: boolean;
    };
    /** @private */
    renderTitle: () => string | VNode[];
};
export declare type DropdownItemInstance = ComponentPublicInstance<DropdownItemProps, DropdownItemExpose>;
