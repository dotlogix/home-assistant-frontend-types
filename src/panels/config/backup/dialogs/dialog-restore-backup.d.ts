import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-spinner";
import "../../../../components/input/ha-input";
import "../../../../components/ha-alert";
import "../../../../components/ha-dialog";
import "../../../../components/ha-svg-icon";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { RestoreBackupDialogParams } from "./show-dialog-restore-backup";
declare class DialogRestoreBackup extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _step?;
    private _params?;
    private _formData?;
    private _open;
    private _backupEncryptionKey?;
    private _userPassword?;
    private _usedUserInput;
    private _error?;
    private _state?;
    private _stage?;
    private _unsub?;
    showDialog(params: RestoreBackupDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _dialogClosed;
    private _fetchEncryptionKey;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderConfirm;
    private _renderEncryptionIntro;
    private _renderEncryption;
    private _renderConfirmActions;
    private _renderProgress;
    private _passwordChanged;
    private _restoreBackup;
    private _subscribeBackupEvents;
    private _unsubscribe;
    private _restoreState;
    private _doRestoreBackup;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-restore-backup": DialogRestoreBackup;
    }
}
export {};
