import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-spinner";
import type { HomeAssistant } from "../../../types";
import "../components/hui-graph-base";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { HourlyForecastCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const DEFAULT_HOURS_TO_SHOW = 24;
export declare const supportsHourlyForecastCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiHourlyForecastCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    private _forecast?;
    private _coordinates?;
    private _yAxisOrigin?;
    private _error?;
    private _subscribed?;
    static getStubConfig(): HourlyForecastCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: HourlyForecastCardFeatureConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderForecastLayer;
    private _unsubscribeForecast;
    private _computeCoordinates;
    private _subscribeForecast;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-hourly-forecast-card-feature": HuiHourlyForecastCardFeature;
    }
}
export {};
