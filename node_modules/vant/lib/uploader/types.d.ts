import type { ComponentPublicInstance } from 'vue';
import type { ImageFit } from '../image';
import type { Interceptor } from '../utils';
import type { UploaderProps } from './Uploader';
export declare type UploaderResultType = 'dataUrl' | 'text' | 'file';
export declare type UploaderFileListItem = {
    url?: string;
    file?: File;
    content?: string;
    isImage?: boolean;
    status?: '' | 'uploading' | 'done' | 'failed';
    message?: string;
    imageFit?: ImageFit;
    deletable?: boolean;
    previewSize?: number | string;
    beforeDelete?: Interceptor;
};
export declare type UploaderMaxSize = number | string | ((file: File) => boolean);
declare type PromiseOrNot<T> = T | Promise<T>;
export declare type UploaderBeforeRead = (file: File | File[], detail: {
    name: string | number;
    index: number;
}) => PromiseOrNot<File | File[] | undefined>;
export declare type UploaderAfterRead = (items: UploaderFileListItem | UploaderFileListItem[], detail: {
    name: string | number;
    index: number;
}) => void;
export declare type UploaderExpose = {
    chooseFile: () => void;
    closeImagePreview: () => void;
};
export declare type UploaderInstance = ComponentPublicInstance<UploaderProps, UploaderExpose>;
export {};
