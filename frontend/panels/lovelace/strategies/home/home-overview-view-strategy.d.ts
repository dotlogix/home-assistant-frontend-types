import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface HomeOverviewViewStrategyConfig {
    type: "home-overview";
    favorite_entities?: string[];
    home_panel?: boolean;
}
export declare class HomeOverviewViewStrategy extends ReactiveElement {
    static generate(config: HomeOverviewViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-overview-view-strategy": HomeOverviewViewStrategy;
    }
}
