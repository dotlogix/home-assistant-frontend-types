import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-footer";
import "../../../components/animation/ha-fade-in";
import "../../../components/ha-generic-picker";
import "../../../components/ha-markdown";
import "../../../components/ha-spinner";
import "../../../components/input/ha-input";
import type { HomeAssistant } from "../../../types";
import type { AddApplicationCredentialDialogParams } from "./show-dialog-add-application-credential";
export declare class DialogAddApplicationCredential extends LitElement {
    hass: HomeAssistant;
    private _loading;
    private _error?;
    private _params?;
    private _domain?;
    private _manifest?;
    private _name?;
    private _description?;
    private _clientId?;
    private _clientSecret?;
    private _domains?;
    private _config?;
    private _open;
    private _invalid;
    showDialog(params: AddApplicationCredentialDialogParams): void;
    private _fetchConfig;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _closeDialog;
    closeDialog(): void;
    private _handleDomainPicked;
    private _updateDescription;
    private _handleValueChanged;
    private _abortDialog;
    private _addApplicationCredential;
    private _getDomainItems;
    private _domainRenderer;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-add-application-credential": DialogAddApplicationCredential;
    }
}
