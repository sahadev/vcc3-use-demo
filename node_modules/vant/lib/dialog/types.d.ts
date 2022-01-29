import { Dialog } from './function-call';
import type { CSSProperties, TeleportProps } from 'vue';
import type { Interceptor } from '../utils';
export declare type DialogTheme = 'default' | 'round-button';
export declare type DialogAction = 'confirm' | 'cancel';
export declare type DialogMessage = string | (() => JSX.Element);
export declare type DialogMessageAlign = 'left' | 'center' | 'right';
export declare type DialogOptions = {
    title?: string;
    width?: string | number;
    theme?: DialogTheme;
    message?: DialogMessage;
    overlay?: boolean;
    teleport?: TeleportProps['to'];
    className?: unknown;
    allowHtml?: boolean;
    lockScroll?: boolean;
    transition?: string;
    beforeClose?: Interceptor;
    messageAlign?: DialogMessageAlign;
    overlayClass?: string;
    overlayStyle?: CSSProperties;
    closeOnPopstate?: boolean;
    cancelButtonText?: string;
    showCancelButton?: boolean;
    showConfirmButton?: boolean;
    cancelButtonColor?: string;
    confirmButtonText?: string;
    confirmButtonColor?: string;
    closeOnClickOverlay?: boolean;
};
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $dialog: typeof Dialog;
    }
}
