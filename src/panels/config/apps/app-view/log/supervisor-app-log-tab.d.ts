import { type CSSResultGroup, LitElement, type TemplateResult } from "lit";
import "../../../../../components/ha-spinner";
import "../../../../../components/input/ha-input-search";
import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import type { HomeAssistant } from "../../../../../types";
import "../../../logs/error-log-card";
declare class SupervisorAppLogDashboard extends LitElement {
    hass: HomeAssistant;
    addon?: HassioAddonDetails;
    private _filter;
    protected render(): TemplateResult;
    private _filterChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-log-tab": SupervisorAppLogDashboard;
    }
}
export {};
