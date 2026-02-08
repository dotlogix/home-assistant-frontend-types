import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-dialog";
import "../../../../components/ha-button";
import "../../../../components/ha-formfield";
import "../../../../components/ha-radio";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { EnergySettingsGridPowerDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyGridPowerSettings extends LitElement implements HassDialog<EnergySettingsGridPowerDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _sensorType;
    private _powerConfig;
    private _power_units?;
    private _error?;
    private _excludeListPower?;
    showDialog(params: EnergySettingsGridPowerDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _isValid;
    private _handleSensorTypeChanged;
    private _standardStatisticChanged;
    private _invertedStatisticChanged;
    private _fromStatisticChanged;
    private _toStatisticChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-grid-power-settings": DialogEnergyGridPowerSettings;
    }
}
