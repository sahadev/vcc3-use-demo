export declare type TranslatePair = {
    [key: string]: string | string[] | TranslatePair;
};
export declare type Language = {
    name: string;
    el: TranslatePair;
};
