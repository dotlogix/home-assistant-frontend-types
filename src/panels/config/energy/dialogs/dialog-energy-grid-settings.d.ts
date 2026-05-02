import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entity-picker";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-formfield";
import "../../../../components/ha-radio";
import "../../../../components/input/ha-input";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "./ha-energy-power-config";
import type { EnergySettingsGridDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyGridSettings extends LitElement implements HassDialog<EnergySettingsGridDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _source?;
    private _powerType;
    private _powerConfig;
    private _importCostType;
    private _exportCostType;
    private _energy_units?;
    private _error?;
    private _excludeList?;
    private _excludeListPower?;
    showDialog(params: EnergySettingsGridDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _isValid;
    private _statisticFromChanged;
    private _statisticToChanged;
    private _handleImportCostTypeChanged;
    private _handleExportCostTypeChanged;
    private _statCostChanged;
    private _entityCostChanged;
    private _numberCostChanged;
    private _statCompensationChanged;
    private _entityCompensationChanged;
    private _numberCompensationChanged;
    private _handlePowerConfigChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-grid-settings": DialogEnergyGridSettings;
    }
}
