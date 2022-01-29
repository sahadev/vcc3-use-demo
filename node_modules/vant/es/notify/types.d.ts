import { Notify } from './function-call';
export declare type NotifyMessage = string | number;
export declare type NotifyType = 'primary' | 'success' | 'danger' | 'warning';
export declare type NotifyOptions = {
    type?: NotifyType;
    color?: string;
    message?: NotifyMessage;
    duration?: number;
    className?: unknown;
    background?: string;
    lockScroll?: boolean;
    onClick?: (event: MouseEvent) => void;
    onClose?: () => void;
    onOpened?: () => void;
};
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $notify: typeof Notify;
    }
}
