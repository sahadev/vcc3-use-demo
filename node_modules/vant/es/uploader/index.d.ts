import { UploaderProps } from './Uploader';
export declare const Uploader: import("../utils").WithInstall<import("vue").DefineComponent<{
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    accept: {
        type: import("vue").PropType<string>;
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
        type: import("vue").PropType<import("..").ImageFit>;
        default: import("..").ImageFit;
    };
    resultType: {
        type: import("vue").PropType<import("./types").UploaderResultType>;
        default: import("./types").UploaderResultType;
    };
    uploadIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    uploadText: StringConstructor;
    deletable: {
        type: BooleanConstructor;
        default: true;
    };
    afterRead: import("vue").PropType<import("./types").UploaderAfterRead>;
    showUpload: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: {
        type: import("vue").PropType<import("./types").UploaderFileListItem[]>;
        default: () => never[];
    };
    beforeRead: import("vue").PropType<import("./types").UploaderBeforeRead>;
    beforeDelete: import("vue").PropType<import("../utils").Interceptor>;
    previewSize: (NumberConstructor | StringConstructor)[];
    previewImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewOptions: import("vue").PropType<import("..").ImagePreviewOptions>;
    previewFullImage: {
        type: BooleanConstructor;
        default: true;
    };
    maxSize: {
        type: import("vue").PropType<import("./types").UploaderMaxSize>;
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
    modelValue: import("./types").UploaderFileListItem[];
    readonly: boolean;
    multiple: boolean;
    lazyLoad: boolean;
    maxCount: string | number;
    imageFit: import("..").ImageFit;
    resultType: import("./types").UploaderResultType;
    uploadIcon: string;
    deletable: boolean;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    maxSize: import("./types").UploaderMaxSize;
} & {
    capture?: string | undefined;
    beforeRead?: import("./types").UploaderBeforeRead | undefined;
    afterRead?: import("./types").UploaderAfterRead | undefined;
    uploadText?: string | undefined;
    beforeDelete?: import("../utils").Interceptor | undefined;
    previewSize?: string | number | undefined;
    previewOptions?: import("..").ImagePreviewOptions | undefined;
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
    modelValue: import("./types").UploaderFileListItem[];
    readonly: boolean;
    multiple: boolean;
    lazyLoad: boolean;
    maxCount: string | number;
    imageFit: import("..").ImageFit;
    resultType: import("./types").UploaderResultType;
    uploadIcon: string;
    deletable: boolean;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    maxSize: import("./types").UploaderMaxSize;
}>>;
export default Uploader;
export type { UploaderProps };
export type { UploaderInstance, UploaderResultType, UploaderFileListItem, } from './types';
