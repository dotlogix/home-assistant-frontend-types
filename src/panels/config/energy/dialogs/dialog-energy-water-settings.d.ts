import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entity-picker";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-formfield";
import "../../../../components/ha-radio";
import "../../../../components/ha-markdown";
import "../../../../components/ha-dialog";
import "../../../../components/input/ha-input";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { EnergySettingsWaterDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyWaterSettings extends LitElement implements HassDialog<EnergySettingsWaterDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _source?;
    private _costs?;
    private _water_units?;
    private _flow_rate_units?;
    private _error?;
    private _excludeList?;
    private _excludeListFlowRate?;
    showDialog(params: EnergySettingsWaterDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleCostChanged;
    private _numberPriceChanged;
    private _priceStatChanged;
    private _priceEntityChanged;
    private _flowRateStatisticChanged;
    private _statisticChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-water-settings": DialogEnergyWaterSettings;
    }
}
