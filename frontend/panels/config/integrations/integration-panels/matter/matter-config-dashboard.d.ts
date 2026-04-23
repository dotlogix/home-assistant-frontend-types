import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-fab";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-svg-icon";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
export declare class MatterConfigDashboard extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _configEntry?;
    protected firstUpdated(changedProperties: PropertyValues): void;
    private _matterDeviceIds;
    private _entityCount;
    protected render(): TemplateResult | typeof nothing;
    private _renderNetworkStatus;
    private _renderMyNetworkCard;
    private _renderNavigationCard;
    private _fetchConfigEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-config-dashboard": MatterConfigDashboard;
    }
}
