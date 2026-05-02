import type { IntegrationManifest } from "../../../data/integration";
export interface AddIntegrationDialogParams {
    brand?: string;
    domain?: string;
    initialFilter?: string;
    navigateToResult?: boolean;
}
export interface YamlIntegrationDialogParams {
    manifest: IntegrationManifest;
}
export declare const showAddIntegrationDialog: (element: HTMLElement, dialogParams?: AddIntegrationDialogParams) => void;
export declare const showYamlIntegrationDialog: (element: HTMLElement, dialogParams?: YamlIntegrationDialogParams) => void;
