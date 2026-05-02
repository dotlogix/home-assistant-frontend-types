import "@home-assistant/webawesome/dist/components/divider/divider";
import type { TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "../dashboard/ha-config-updates";
declare class HaConfigSectionUpdates extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _searchParms;
    private _showSkipped;
    private _supervisorInfo?;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _refreshSupervisorInfo;
    private _handleOverflowAction;
    private _setChannel;
    private _checkUpdates;
    private _filterInstallableUpdateEntities;
    private _filterNotInstallableUpdateEntities;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-updates": HaConfigSectionUpdates;
    }
}
export {};
