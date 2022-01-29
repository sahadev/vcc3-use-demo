import type { ComponentPublicInstance, ComputedRef } from 'vue';
import type { TabsProps } from './Tabs';
export declare type TabsType = 'line' | 'card';
export declare type TabsClickTabEventParams = {
    name: string | number;
    title: string;
    event: MouseEvent;
    disabled: boolean;
};
export declare type TabsProvide = {
    id: string;
    props: TabsProps;
    setLine: () => void;
    onRendered: (name: string | number, title?: string) => void;
    scrollIntoView: (immediate?: boolean) => void;
    currentName: ComputedRef<number | string | undefined>;
};
export declare type TabsExpose = {
    resize: () => void;
    scrollTo: (name: number | string) => void;
};
export declare type TabsInstance = ComponentPublicInstance<TabsProps, TabsExpose>;
