import type { HassioAddonsInfo } from "../../../../../data/hassio/addon";
import "./dialog-repositories";
export interface RepositoryDialogParams {
    addon: HassioAddonsInfo;
    url?: string;
    closeCallback?: () => void;
}
export declare const showRepositoriesDialog: (element: HTMLElement, dialogParams: RepositoryDialogParams) => void;
