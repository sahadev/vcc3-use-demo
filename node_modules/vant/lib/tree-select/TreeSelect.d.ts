import { PropType, ExtractPropTypes } from 'vue';
export declare type TreeSelectChild = {
    id: number | string;
    text: string;
    disabled?: boolean;
};
export declare type TreeSelectItem = {
    dot?: boolean;
    text: string;
    badge?: number | string;
    children?: TreeSelectChild[];
    disabled?: boolean;
    className?: unknown;
};
declare const treeSelectProps: {
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    items: {
        type: PropType<TreeSelectItem[]>;
        default: () => never[];
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    selectedIcon: {
        type: PropType<string>;
        default: string;
    };
    mainActiveIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    activeId: {
        type: PropType<string | number | (string | number)[]>;
        default: number;
    };
};
export declare type TreeSelectProps = ExtractPropTypes<typeof treeSelectProps>;
declare const _default: import("vue").DefineComponent<{
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    items: {
        type: PropType<TreeSelectItem[]>;
        default: () => never[];
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    selectedIcon: {
        type: PropType<string>;
        default: string;
    };
    mainActiveIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    activeId: {
        type: PropType<string | number | (string | number)[]>;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click-item" | "click-nav" | "update:activeId" | "update:mainActiveIndex")[], "click-item" | "click-nav" | "update:activeId" | "update:mainActiveIndex", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    max?: unknown;
    items?: unknown;
    height?: unknown;
    selectedIcon?: unknown;
    mainActiveIndex?: unknown;
    activeId?: unknown;
} & {
    height: string | number;
    max: string | number;
    items: TreeSelectItem[];
    selectedIcon: string;
    mainActiveIndex: string | number;
    activeId: string | number | (string | number)[];
} & {}> & {
    "onClick-item"?: ((...args: any[]) => any) | undefined;
    "onClick-nav"?: ((...args: any[]) => any) | undefined;
    "onUpdate:activeId"?: ((...args: any[]) => any) | undefined;
    "onUpdate:mainActiveIndex"?: ((...args: any[]) => any) | undefined;
}, {
    height: string | number;
    max: string | number;
    items: TreeSelectItem[];
    selectedIcon: string;
    mainActiveIndex: string | number;
    activeId: string | number | (string | number)[];
}>;
export default _default;
