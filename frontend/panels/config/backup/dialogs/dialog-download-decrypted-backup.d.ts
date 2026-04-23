import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/input/ha-input";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { DownloadDecryptedBackupDialogParams } from "./show-dialog-download-decrypted-backup";
declare class DialogDownloadDecryptedBackup extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _open;
    private _params?;
    private _encryptionKey;
    private _error;
    showDialog(params: DownloadDecryptedBackupDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _cancel;
    private _submit;
    private _keyChanged;
    private get _agentId();
    private _downloadEncrypted;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-download-decrypted-backup": DialogDownloadDecryptedBackup;
    }
}
export {};
