import type { ComponentPublicInstance } from 'vue';
import type { AreaProps } from './Area';
export declare type AreaList = {
    city_list: Record<string, string>;
    county_list: Record<string, string>;
    province_list: Record<string, string>;
};
export declare type AreaColumnOption = {
    name: string;
    code: string;
};
export declare type AreaColumnType = 'province' | 'county' | 'city';
export declare type AreaExpose = {
    reset: (newCode?: string) => void;
    getArea: () => {
        code: string;
        country: string;
        province: string;
        city: string;
        county: string;
    };
    getValues: () => AreaColumnOption[];
};
export declare type AreaInstance = ComponentPublicInstance<AreaProps, AreaExpose>;
