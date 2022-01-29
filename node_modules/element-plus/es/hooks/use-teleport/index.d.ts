import type { VNode, Ref } from 'vue';
export declare const useTeleport: (contentRenderer: () => VNode, appendToBody: Ref<boolean>) => {
    isTeleportVisible: Ref<boolean>;
    showTeleport: () => void;
    hideTeleport: () => void;
    renderTeleport: () => void;
};
