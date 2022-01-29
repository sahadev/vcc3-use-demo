import type { App, Plugin } from 'vue';
import type { ConfigProviderContext } from 'element-plus/es/tokens';
export declare const makeInstaller: (components?: Plugin[]) => {
    version: string;
    install: (app: App, options?: ConfigProviderContext) => void;
};
