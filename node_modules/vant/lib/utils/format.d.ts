import { CSSProperties } from 'vue';
export declare function addUnit(value?: string | number): string | undefined;
export declare function getSizeStyle(originSize?: string | number): CSSProperties | undefined;
export declare function getZIndexStyle(zIndex?: string | number): CSSProperties;
export declare function unitToPx(value: string | number): number;
export declare const camelize: (str: string) => string;
export declare const kebabCase: (str: string) => string;
export declare function padZero(num: number | string, targetLength?: number): string;
/** clamps number within the inclusive lower and upper bounds */
export declare const clamp: (num: number, min: number, max: number) => number;
export declare function formatNumber(value: string, allowDot?: boolean, allowMinus?: boolean): string;
export declare function addNumber(num1: number, num2: number): number;
