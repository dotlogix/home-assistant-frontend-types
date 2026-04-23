import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { CoverTiltPositionCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsCoverTiltPositionCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiCoverTiltPositionCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    color?: string;
    private _config?;
    private get _stateObj();
    static getStubConfig(): CoverTiltPositionCardFeatureConfig;
    setConfig(config: CoverTiltPositionCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-tilt-position-card-feature": HuiCoverTiltPositionCardFeature;
    }
}
export {};
