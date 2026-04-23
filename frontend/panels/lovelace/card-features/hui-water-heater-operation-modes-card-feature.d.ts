import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-list-item";
import type { OperationMode } from "../../../data/water_heater";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, WaterHeaterOperationModesCardFeatureConfig } from "./types";
export declare const supportsWaterHeaterOperationModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiWaterHeaterOperationModeCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    _currentOperationMode?: OperationMode;
    private _renderOperationModeIcon;
    private get _stateObj();
    static getStubConfig(): WaterHeaterOperationModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: WaterHeaterOperationModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-water-heater-operation-modes-card-feature": HuiWaterHeaterOperationModeCardFeature;
    }
}
export {};
