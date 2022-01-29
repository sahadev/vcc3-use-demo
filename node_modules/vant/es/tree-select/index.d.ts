export declare const TreeSelect: import("../utils").WithInstall<import("vue").DefineComponent<{
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    items: {
        type: import("vue").PropType<import("./TreeSelect").TreeSelectItem[]>;
        default: () => never[];
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    selectedIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    mainActiveIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    activeId: {
        type: import("vue").PropType<string | number | (string | number)[]>;
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
    items: import("./TreeSelect").TreeSelectItem[];
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
    items: import("./TreeSelect").TreeSelectItem[];
    selectedIcon: string;
    mainActiveIndex: string | number;
    activeId: string | number | (string | number)[];
}>>;
export default TreeSelect;
export type { TreeSelectItem, TreeSelectChild, TreeSelectProps, } from './TreeSelect';
