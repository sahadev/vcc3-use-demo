import { PropType, ExtractPropTypes } from 'vue';
import { Interceptor } from '../utils';
import { ImagePreviewOptions } from '../image-preview';
import type { ImageFit } from '../image';
import type { UploaderMaxSize, UploaderAfterRead, UploaderBeforeRead, UploaderResultType, UploaderFileListItem } from './types';
declare const uploaderProps: {
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    accept: {
        type: PropType<string>;
        default: string;
    };
    capture: StringConstructor;
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    maxCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    imageFit: {
        type: PropType<ImageFit>;
        default: ImageFit;
    };
    resultType: {
        type: PropType<UploaderResultType>;
        default: UploaderResultType;
    };
    uploadIcon: {
        type: PropType<string>;
        default: string;
    };
    uploadText: StringConstructor;
    deletable: {
        type: BooleanConstructor;
        default: true;
    };
    afterRead: PropType<UploaderAfterRead>;
    showUpload: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: {
        type: PropType<UploaderFileListItem[]>;
        default: () => never[];
    };
    beforeRead: PropType<UploaderBeforeRead>;
    beforeDelete: PropType<Interceptor>;
    previewSize: (NumberConstructor | StringConstructor)[];
    previewImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewOptions: PropType<ImagePreviewOptions>;
    previewFullImage: {
        type: BooleanConstructor;
        default: true;
    };
    maxSize: {
        type: PropType<UploaderMaxSize>;
        default: number;
    };
};
export declare type UploaderProps = ExtractPropTypes<typeof uploaderProps>;
declare const _default: import("vue").DefineComponent<{
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    accept: {
        type: PropType<string>;
        default: string;
    };
    capture: StringConstructor;
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    maxCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    imageFit: {
        type: PropType<ImageFit>;
        default: ImageFit;
    };
    resultType: {
        type: PropType<UploaderResultType>;
        default: UploaderResultType;
    };
    uploadIcon: {
        type: PropType<string>;
        default: string;
    };
    uploadText: StringConstructor;
    deletable: {
        type: BooleanConstructor;
        default: true;
    };
    afterRead: PropType<UploaderAfterRead>;
    showUpload: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: {
        type: PropType<UploaderFileListItem[]>;
        default: () => never[];
    };
    beforeRead: PropType<UploaderBeforeRead>;
    beforeDelete: PropType<Interceptor>;
    previewSize: (NumberConstructor | StringConstructor)[];
    previewImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewOptions: PropType<ImagePreviewOptions>;
    previewFullImage: {
        type: BooleanConstructor;
        default: true;
    };
    maxSize: {
        type: PropType<UploaderMaxSize>;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "delete" | "oversize" | "click-upload" | "close-preview" | "click-preview")[], "update:modelValue" | "delete" | "oversize" | "click-upload" | "close-preview" | "click-preview", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    name?: unknown;
    accept?: unknown;
    capture?: unknown;
    multiple?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    lazyLoad?: unknown;
    maxCount?: unknown;
    imageFit?: unknown;
    resultType?: unknown;
    uploadIcon?: unknown;
    uploadText?: unknown;
    deletable?: unknown;
    afterRead?: unknown;
    showUpload?: unknown;
    modelValue?: unknown;
    beforeRead?: unknown;
    beforeDelete?: unknown;
    previewSize?: unknown;
    previewImage?: unknown;
    previewOptions?: unknown;
    previewFullImage?: unknown;
    maxSize?: unknown;
} & {
    name: string | number;
    accept: string;
    disabled: boolean;
    modelValue: UploaderFileListItem[];
    readonly: boolean;
    multiple: boolean;
    lazyLoad: boolean;
    maxCount: string | number;
    imageFit: ImageFit;
    resultType: UploaderResultType;
    uploadIcon: string;
    deletable: boolean;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    maxSize: UploaderMaxSize;
} & {
    capture?: string | undefined;
    beforeRead?: UploaderBeforeRead | undefined;
    afterRead?: UploaderAfterRead | undefined;
    uploadText?: string | undefined;
    beforeDelete?: Interceptor | undefined;
    previewSize?: string | number | undefined;
    previewOptions?: ImagePreviewOptions | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    onOversize?: ((...args: any[]) => any) | undefined;
    "onClick-upload"?: ((...args: any[]) => any) | undefined;
    "onClose-preview"?: ((...args: any[]) => any) | undefined;
    "onClick-preview"?: ((...args: any[]) => any) | undefined;
}, {
    name: string | number;
    accept: string;
    disabled: boolean;
    modelValue: UploaderFileListItem[];
    readonly: boolean;
    multiple: boolean;
    lazyLoad: boolean;
    maxCount: string | number;
    imageFit: ImageFit;
    resultType: UploaderResultType;
    uploadIcon: string;
    deletable: boolean;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    maxSize: UploaderMaxSize;
}>;
export default _default;
