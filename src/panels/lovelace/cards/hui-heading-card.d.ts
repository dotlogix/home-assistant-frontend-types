import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon";
import "../../../components/ha-icon-next";
import "../../../components/ha-state-icon";
import "../../../state-display/state-display";
import type { HomeAssistant } from "../../../types";
import "../heading-badges/hui-heading-badge";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { HeadingCardConfig } from "./types";
export declare const migrateHeadingCardConfig: (config: HeadingCardConfig) => HeadingCardConfig;
export declare class HuiHeadingCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): HeadingCardConfig;
    hass?: HomeAssistant;
    preview: boolean;
    private _badges?;
    private _config?;
    private _badgesOverflowing;
    private _dragScrollController;
    private _resizeObserver?;
    private _observedBadges?;
    setConfig(config: HeadingCardConfig): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected updated(): void;
    disconnectedCallback(): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private _handleAction;
    private _measureBadgesOverflow;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-heading-card": HuiHeadingCard;
    }
}
