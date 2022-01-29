import type { CSSProperties, Plugin } from 'vue';
declare type OptionalKeys<T extends Record<string, unknown>> = {
    [K in keyof T]: T extends Record<K, T[K]> ? never : K;
}[keyof T];
declare type RequiredKeys<T extends Record<string, unknown>> = Exclude<keyof T, OptionalKeys<T>>;
declare type MonoArgEmitter<T, Keys extends keyof T> = <K extends Keys>(evt: K, arg?: T[K]) => void;
declare type BiArgEmitter<T, Keys extends keyof T> = <K extends Keys>(evt: K, arg: T[K]) => void;
export declare type EventEmitter<T extends Record<string, unknown>> = MonoArgEmitter<T, OptionalKeys<T>> & BiArgEmitter<T, RequiredKeys<T>>;
export declare type AnyFunction<T> = (...args: any[]) => T;
export declare type PartialReturnType<T extends (...args: unknown[]) => unknown> = Partial<ReturnType<T>>;
export declare type SFCWithInstall<T> = T & Plugin;
export declare type Nullable<T> = T | null;
export declare type RefElement = Nullable<HTMLElement>;
export declare type CustomizedHTMLElement<T> = HTMLElement & T;
export declare type Indexable<T> = {
    [key: string]: T;
};
export declare type Hash<T> = Indexable<T>;
export declare type TimeoutHandle = number;
export declare type ComponentSize = 'large' | 'default' | 'small';
export declare type StyleValue = string | CSSProperties | Array<StyleValue>;
export declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
export {};
