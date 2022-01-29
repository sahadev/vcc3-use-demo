import type { Ref } from 'vue';
import type { DropdownMenuProps } from './DropdownMenu';
export declare type DropdownMenuDirection = 'up' | 'down';
export declare type DropdownMenuProvide = {
    id: string;
    props: DropdownMenuProps;
    offset: Ref<number>;
};
