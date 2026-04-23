import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-select";
import "../../../components/ha-spinner";
import "../../../components/ha-dialog";
import type { HomeAssistant } from "../../../types";
import type { MoveDatadiskDialogParams } from "./show-dialog-move-datadisk";
declare class MoveDatadiskDialog extends LitElement {
    hass: HomeAssistant;
    private _hostInfo?;
    private _selectedDevice?;
    private _disks?;
    private _osInfo?;
    private _moving;
    private _open;
    showDialog(dialogParams: MoveDatadiskDialogParams): Promise<Promise<void>>;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _selectDevice;
    private _moveDatadisk;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-move-datadisk": MoveDatadiskDialog;
    }
}
export {};
