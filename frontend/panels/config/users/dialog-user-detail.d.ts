import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-icon-button";
import "../../../components/ha-label";
import "../../../components/ha-md-list-item";
import "../../../components/ha-svg-icon";
import "../../../components/ha-switch";
import "../../../components/ha-textfield";
import "../../../components/ha-dialog";
import type { HomeAssistant } from "../../../types";
import type { UserDetailDialogParams } from "./show-dialog-user-detail";
declare class DialogUserDetail extends LitElement {
    hass: HomeAssistant;
    private _name;
    private _isAdmin?;
    private _localOnly?;
    private _isActive?;
    private _error?;
    private _params?;
    private _open;
    private _submitting;
    showDialog(params: UserDetailDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _nameChanged;
    private _adminChanged;
    private _localOnlyChanged;
    private _activeChanged;
    private _updateEntry;
    private _deleteEntry;
    private _changeUsername;
    private _changePassword;
    private _close;
    private _dialogClosed;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-user-detail": DialogUserDetail;
    }
}
export {};
