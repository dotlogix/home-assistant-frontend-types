import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-dialog";
import "../../../../components/ha-button";
import "../../../../components/ha-formfield";
import "../../../../components/ha-radio";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { EnergySettingsBatteryDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyBatterySettings extends LitElement implements HassDialog<EnergySettingsBatteryDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _source?;
    private _powerType;
    private _powerConfig;
    private _energy_units?;
    private _power_units?;
    private _error?;
    private _excludeList?;
    private _excludeListPower?;
    showDialog(params: EnergySettingsBatteryDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _isValid;
    private _statisticToChanged;
    private _statisticFromChanged;
    private _handlePowerTypeChanged;
    private _standardPowerChanged;
    private _invertedPowerChanged;
    private _dischargePowerChanged;
    private _chargePowerChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-battery-settings": DialogEnergyBatterySettings;
    }
}
