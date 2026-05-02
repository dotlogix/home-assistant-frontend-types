import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import type { BluetoothDeviceInfoDialogParams } from "./show-dialog-bluetooth-device-info";
declare class DialogBluetoothDeviceInfo extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: BluetoothDeviceInfoDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    showDataAsHex(bytestring: string): string;
    private _copyToClipboard;
    protected render(): TemplateResult | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-bluetooth-device-info": DialogBluetoothDeviceInfo;
    }
}
export {};
