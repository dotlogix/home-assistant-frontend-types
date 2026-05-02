import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-spinner";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { DailyForecastCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const DEFAULT_DAYS_TO_SHOW = 7;
export type DailyForecastType = "daily" | "twice_daily";
export declare const supportsDailyForecastCardFeature: (stateObj: HassEntity | undefined) => boolean;
export declare const resolveDailyForecastType: (stateObj: HassEntity | undefined, configured?: DailyForecastType) => DailyForecastType | undefined;
declare class HuiDailyForecastCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _connection;
    private _config?;
    private _forecast?;
    private _error?;
    private _subscribed?;
    private _subscribedType?;
    static getStubConfig(): DailyForecastCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: DailyForecastCardFeatureConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    private _resolvedForecastType;
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderChart;
    private _unsubscribeForecast;
    private _subscribeForecast;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-daily-forecast-card-feature": HuiDailyForecastCardFeature;
    }
}
export {};
