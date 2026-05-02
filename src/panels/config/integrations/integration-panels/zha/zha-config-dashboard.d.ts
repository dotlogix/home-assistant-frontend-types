import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-svg-icon";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
declare class ZHAConfigDashboard extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _configEntry?;
    private _configuration?;
    private _offlineDevices;
    private _totalGroups?;
    private _asyncDataLoaded;
    private _error?;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _renderNetworkStatus;
    private _renderMyNetworkCard;
    private _renderNavigationCard;
    private _renderBackupCard;
    private _fetchConfigEntry;
    private _fetchConfiguration;
    private _createAndDownloadBackup;
    private _openOptionFlow;
    private _fetchDevicesAndGroups;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-config-dashboard": ZHAConfigDashboard;
    }
}
export {};
