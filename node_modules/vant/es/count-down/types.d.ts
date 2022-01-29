import type { ComponentPublicInstance } from 'vue';
import type { CurrentTime } from '@vant/use';
import type { CountDownProps } from './CountDown';
declare type CountDownExpose = {
    start: () => void;
    pause: () => void;
    reset: () => void;
};
export declare type CountDownInstance = ComponentPublicInstance<CountDownProps, CountDownExpose>;
export declare type CountDownCurrentTime = CurrentTime;
export {};
