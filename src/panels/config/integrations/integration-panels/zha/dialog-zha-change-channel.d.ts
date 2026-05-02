import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-dialog";
import "../../../../../components/ha-select";
import type { HassDialog } from "../../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../../types";
import type { ZHAChangeChannelDialogParams } from "./show-dialog-zha-change-channel";
declare class DialogZHAChangeChannel extends LitElement implements HassDialog<ZHAChangeChannelDialogParams> {
    hass: HomeAssistant;
    private _migrationInProgress;
    private _params?;
    private _newChannel?;
    private _open;
    showDialog(params: ZHAChangeChannelDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): TemplateResult | typeof nothing;
    private _newChannelChosen;
    private _changeNetworkChannel;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zha-change-channel": DialogZHAChangeChannel;
    }
}
export {};
