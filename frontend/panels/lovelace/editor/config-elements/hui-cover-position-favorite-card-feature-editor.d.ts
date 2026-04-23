import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import type { HomeAssistant } from "../../../../types";
import type { CoverPositionFavoriteCardFeatureConfig, LovelaceCardFeatureContext } from "../../card-features/types";
import type { LovelaceCardFeatureEditor } from "../../types";
export declare class HuiCoverPositionFavoriteCardFeatureEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    setConfig(config: CoverPositionFavoriteCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-position-favorite-card-feature-editor": HuiCoverPositionFavoriteCardFeatureEditor;
    }
}
