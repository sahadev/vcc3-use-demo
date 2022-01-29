export declare type PopoverTheme = 'light' | 'dark';
export declare type PopoverTrigger = 'manual' | 'click';
export declare type PopoverPlacement = 'top' | 'top-start' | 'top-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end';
export declare type PopoverAction = {
    text: string;
    icon?: string;
    color?: string;
    disabled?: boolean;
    className?: string;
    [key: PropertyKey]: any;
};
