import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCardFeatureContext, ValvePositionFavoriteCardFeatureConfig } from "../../card-features/types";
import type { LovelaceCardFeatureEditor } from "../../types";
export declare class HuiValvePositionFavoriteCardFeatureEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    setConfig(config: ValvePositionFavoriteCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-valve-position-favorite-card-feature-editor": HuiValvePositionFavoriteCardFeatureEditor;
    }
}
