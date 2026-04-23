import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entity-picker";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-radio";
import "../../../../components/ha-select";
import "../../../../components/ha-dialog";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { EnergySettingsDeviceWaterDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyDeviceSettingsWater extends LitElement implements HassDialog<EnergySettingsDeviceWaterDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _device?;
    private _volume_units?;
    private _flow_rate_units?;
    private _error?;
    private _excludeList?;
    private _excludeListFlowRate?;
    private _possibleParents;
    showDialog(params: EnergySettingsDeviceWaterDialogParams): Promise<void>;
    private _computePossibleParents;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _statisticChanged;
    private _flowRateStatisticChanged;
    private _nameChanged;
    private _parentSelected;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-device-settings-water": DialogEnergyDeviceSettingsWater;
    }
}
