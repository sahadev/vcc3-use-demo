export declare type Interceptor = (...args: any[]) => Promise<boolean> | boolean | undefined;
export declare function callInterceptor(interceptor: Interceptor | undefined, { args, done, canceled, }: {
    args?: unknown[];
    done: () => void;
    canceled?: () => void;
}): void;
