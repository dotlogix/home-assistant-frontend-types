import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/ha-textfield";
import "../../../../../components/ha-tooltip";
import type { HomeAssistant } from "../../../../../types";
import type { RepositoryDialogParams } from "./show-dialog-repositories";
declare class AppsRepositoriesDialog extends LitElement {
    hass: HomeAssistant;
    private _optionInput?;
    private _repositories?;
    private _dialogParams?;
    private _addon?;
    private _opened;
    private _processing;
    private _error?;
    showDialog(dialogParams: RepositoryDialogParams): Promise<void>;
    closeDialog(): void;
    private _filteredRepositories;
    private _filteredUsedRepositories;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
    focus(): void;
    private _handleKeyAdd;
    private _loadData;
    private _addRepository;
    private _removeRepository;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-apps-repositories": AppsRepositoriesDialog;
    }
}
export {};
