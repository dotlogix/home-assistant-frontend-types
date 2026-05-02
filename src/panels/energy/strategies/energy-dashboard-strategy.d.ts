import { ReactiveElement } from "lit";
import type { LovelaceStrategyConfig } from "../../../data/lovelace/config/strategy";
import type { LovelaceConfig } from "../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../types";
export interface EnergyDashboardStrategyConfig extends LovelaceStrategyConfig {
    type: "energy";
}
export declare class EnergyDashboardStrategy extends ReactiveElement {
    static generate(_config: EnergyDashboardStrategyConfig, hass: HomeAssistant): Promise<LovelaceConfig>;
    static noEditor: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "energy-dashboard-strategy": EnergyDashboardStrategy;
    }
}
