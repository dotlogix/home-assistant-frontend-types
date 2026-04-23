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
import type { EnergySettingsDeviceDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyDeviceSettings extends LitElement implements HassDialog<EnergySettingsDeviceDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _device?;
    private _energy_units?;
    private _power_units?;
    private _error?;
    private _excludeList?;
    private _excludeListPower?;
    private _possibleParents;
    showDialog(params: EnergySettingsDeviceDialogParams): Promise<void>;
    private _computePossibleParents;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _statisticChanged;
    private _powerStatisticChanged;
    private _nameChanged;
    private _parentSelected;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-device-settings": DialogEnergyDeviceSettings;
    }
}
