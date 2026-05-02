import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "./ha-energy-power-config";
import type { EnergySettingsBatteryDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyBatterySettings extends LitElement implements HassDialog<EnergySettingsBatteryDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _source?;
    private _powerType;
    private _powerConfig;
    private _energy_units?;
    private _error?;
    private _excludeList?;
    private _excludeListPower?;
    showDialog(params: EnergySettingsBatteryDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _isValid;
    private _statisticToChanged;
    private _statisticFromChanged;
    private _handlePowerConfigChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-battery-settings": DialogEnergyBatterySettings;
    }
}
