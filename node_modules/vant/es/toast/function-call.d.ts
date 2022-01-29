import { App } from 'vue';
import { ComponentInstance } from '../utils';
import type { ToastType, ToastOptions } from './types';
declare function Toast(options?: string | ToastOptions): ComponentInstance;
declare namespace Toast {
    var loading: (options: string | ToastOptions) => ComponentInstance;
    var success: (options: string | ToastOptions) => ComponentInstance;
    var fail: (options: string | ToastOptions) => ComponentInstance;
    var clear: (all?: boolean | undefined) => void;
    var setDefaultOptions: {
        (options: ToastOptions): void;
        (type: ToastType, options: ToastOptions): void;
    };
    var resetDefaultOptions: (type?: ToastType | undefined) => void;
    var allowMultiple: (value?: boolean) => void;
    var install: (app: App<any>) => void;
}
export { Toast };
