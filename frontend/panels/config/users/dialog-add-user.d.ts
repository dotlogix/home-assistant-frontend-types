import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-icon-button";
import "../../../components/ha-md-list-item";
import "../../../components/ha-switch";
import "../../../components/input/ha-input";
import type { HomeAssistant } from "../../../types";
import type { AddUserDialogParams } from "./show-dialog-add-user";
export declare class DialogAddUser extends LitElement {
    hass: HomeAssistant;
    private _loading;
    private _error?;
    private _params?;
    private _open;
    private _name?;
    private _username?;
    private _password?;
    private _passwordConfirm?;
    private _isAdmin?;
    private _localOnly?;
    private _allowChangeName;
    showDialog(params: AddUserDialogParams): void;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _close;
    private _dialogClosed;
    private _maybePopulateUsername;
    private _handleValueChanged;
    private _adminChanged;
    private _localOnlyChanged;
    private _createUser;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-add-user": DialogAddUser;
    }
}
