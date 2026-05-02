import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-alert";
import "../../components/ha-button";
import "../../components/ha-dialog";
import "../../components/ha-dialog-footer";
import "../../components/ha-svg-icon";
import "../../components/input/ha-input";
import type { HomeAssistant } from "../../types";
import type { LongLivedAccessTokenDialogParams } from "./show-long-lived-access-token-dialog";
export declare class HaLongLivedAccessTokenDialog extends LitElement {
    hass: HomeAssistant;
    private _qrCode?;
    private _open;
    private _renderDialog;
    private _name;
    private _token?;
    private _createdCallback;
    private _existingNames;
    private _loading;
    private _errorMessage?;
    showDialog(params: LongLivedAccessTokenDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | TemplateResult<1>;
    private _nameChanged;
    private _isCreateDisabled;
    private _createToken;
    private _copyToken;
    private _normalizeName;
    private _hasDuplicateName;
    private _generateQR;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-long-lived-access-token-dialog": HaLongLivedAccessTokenDialog;
    }
}
