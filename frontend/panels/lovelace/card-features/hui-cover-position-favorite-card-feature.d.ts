import type { CoverEntity } from "../../../data/cover";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeatureEditor } from "../types";
import { HuiNumericFavoriteCardFeatureBase, type NumericFavoriteCardFeatureDefinition } from "./hui-numeric-favorite-card-feature-base";
import type { CoverPositionFavoriteCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsCoverPositionFavoriteCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiCoverPositionFavoriteCardFeature extends HuiNumericFavoriteCardFeatureBase<CoverEntity, CoverPositionFavoriteCardFeatureConfig> {
    protected get _definition(): NumericFavoriteCardFeatureDefinition<CoverEntity>;
    static getStubConfig(): CoverPositionFavoriteCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-position-favorite-card-feature": HuiCoverPositionFavoriteCardFeature;
    }
}
export {};
