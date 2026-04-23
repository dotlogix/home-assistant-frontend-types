import { ReactiveElement } from "lit";
import type { LovelaceStrategyConfig } from "../../../data/lovelace/config/strategy";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
export declare class WaterViewStrategy extends ReactiveElement {
    static generate(_config: LovelaceStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "water-view-strategy": WaterViewStrategy;
    }
}
