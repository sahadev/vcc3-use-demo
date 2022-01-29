import { PropType } from 'vue';
import { Interceptor } from '../utils';
import { ImageFit } from '../image';
import type { UploaderFileListItem } from './types';
declare const _default: import("vue").DefineComponent<{
    name: (NumberConstructor | StringConstructor)[];
    item: {
        type: PropType<UploaderFileListItem>;
        required: true;
    };
    index: NumberConstructor;
    imageFit: PropType<ImageFit>;
    lazyLoad: BooleanConstructor;
    deletable: BooleanConstructor;
    previewSize: (NumberConstructor | StringConstructor)[];
    beforeDelete: PropType<Interceptor>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("delete" | "preview")[], "delete" | "preview", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    name?: unknown;
    item?: unknown;
    index?: unknown;
    imageFit?: unknown;
    lazyLoad?: unknown;
    deletable?: unknown;
    previewSize?: unknown;
    beforeDelete?: unknown;
} & {
    item: UploaderFileListItem;
    lazyLoad: boolean;
    deletable: boolean;
} & {
    name?: string | number | undefined;
    index?: number | undefined;
    imageFit?: ImageFit | undefined;
    beforeDelete?: Interceptor | undefined;
    previewSize?: string | number | undefined;
}> & {
    onDelete?: ((...args: any[]) => any) | undefined;
    onPreview?: ((...args: any[]) => any) | undefined;
}, {
    lazyLoad: boolean;
    deletable: boolean;
}>;
export default _default;
