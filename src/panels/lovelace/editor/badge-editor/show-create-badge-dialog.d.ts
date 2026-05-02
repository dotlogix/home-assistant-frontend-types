import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
export interface CreateBadgeDialogParams {
    lovelaceConfig: LovelaceConfig;
    saveConfig: (config: LovelaceConfig) => void;
    path: [number];
    suggestedBadges?: string[];
    entities?: string[];
}
export declare const importCreateBadgeDialog: () => Promise<typeof import("./hui-dialog-create-badge")>;
export declare const showCreateBadgeDialog: (element: HTMLElement, createBadgeDialogParams: CreateBadgeDialogParams) => void;
