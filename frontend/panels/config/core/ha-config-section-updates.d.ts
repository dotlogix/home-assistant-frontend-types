import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "../dashboard/ha-config-updates";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "@home-assistant/webawesome/dist/components/divider/divider";
declare class HaConfigSectionUpdates extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _searchParms;
    private _showSkipped;
    private _supervisorInfo?;
    protected firstUpdated(changedProps: any): void;
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
