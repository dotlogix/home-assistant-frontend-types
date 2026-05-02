import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-adaptive-dialog";
import "../../../../components/ha-alert";
import "../../../../components/ha-area-picker";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-labels-picker";
import "../../../../components/input/ha-input";
import type { HomeAssistant } from "../../../../types";
import type { DeviceRegistryDetailDialogParams } from "./show-dialog-device-registry-detail";
declare class DialogDeviceRegistryDetail extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _nameByUser;
    private _error?;
    private _params?;
    private _areaId;
    private _labels;
    private _disabledBy;
    private _submitting;
    showDialog(params: DeviceRegistryDetailDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _nameChanged;
    private _areaPicked;
    private _labelsChanged;
    private _disabledByChanged;
    private _updateEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-device-registry-detail": DialogDeviceRegistryDetail;
    }
}
export {};
