import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-divider";
import "../../components/ha-icon";
import "../../components/ha-list-item";
import "../../components/ha-select";
import "../../components/ha-settings-row";
import "../../components/ha-spinner";
import "../../components/ha-svg-icon";
import type { HomeAssistant } from "../../types";
declare class HaPickDashboardRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _dashboards?;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _getDashboards;
    private _dashboardChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-pick-dashboard-row": HaPickDashboardRow;
    }
}
export {};
