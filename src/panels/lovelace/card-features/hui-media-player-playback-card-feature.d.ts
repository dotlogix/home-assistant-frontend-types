import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import type { MediaPlayerEntity } from "../../../data/media-player";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { type MediaPlayerPlaybackControl, type LovelaceCardFeatureContext, type MediaPlayerPlaybackCardFeatureConfig } from "./types";
export declare const supportsMediaPlayerPlaybackControl: (stateObj: MediaPlayerEntity, control: MediaPlayerPlaybackControl) => boolean;
export declare const supportsMediaPlayerPlaybackCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiMediaPlayerPlaybackCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    color?: string;
    private _config?;
    private _narrow?;
    private get _stateObj();
    private get _controls();
    static getStubConfig(): MediaPlayerPlaybackCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: MediaPlayerPlaybackCardFeatureConfig): void;
    willUpdate(): void;
    protected shouldUpdate(changedProps: PropertyValues<this>): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _measureCard;
    private _computeButtons;
    /**
     * Controls are explicitly configured: iterate in config order,
     * show each supported control as its own button.
     */
    private _computeExplicitButtons;
    private _filterNarrow;
    private _action;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-player-playback-card-feature": HuiMediaPlayerPlaybackCardFeature;
    }
}
export {};
