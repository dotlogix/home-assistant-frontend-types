import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-select-box";
import "../../../../../components/input/ha-input";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import type { MatterLockUserEditDialogParams } from "./show-dialog-matter-lock-user-edit";
declare class DialogMatterLockUserEdit extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _userName;
    private _userType;
    private _pinCode;
    private _saving;
    private _error;
    private _open;
    showDialog(params: MatterLockUserEditDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleNameChange;
    private _handlePinChange;
    private get _userTypeOptions();
    private _handleUserTypeChanged;
    private _save;
    closeDialog(): void;
    private _dialogClosed;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-lock-user-edit": DialogMatterLockUserEdit;
    }
}
export {};
