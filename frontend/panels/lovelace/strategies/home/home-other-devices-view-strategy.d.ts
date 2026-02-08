import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface HomeOtherDevicesViewStrategyConfig {
    type: "home-other-devices";
    home_panel?: boolean;
}
export declare class HomeOtherDevicesViewStrategy extends ReactiveElement {
    static generate(config: HomeOtherDevicesViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-other-devices-view-strategy": HomeOtherDevicesViewStrategy;
    }
}
