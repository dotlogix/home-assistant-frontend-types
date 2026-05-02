import type { CSSResultGroup, TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/chips/ha-assist-chip";
import "../../../../../components/chips/ha-chip-set";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-formfield";
import "../../../../../components/ha-markdown";
import "../../../../../components/ha-settings-row";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/ha-switch";
import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import type { StoreAddonDetails } from "../../../../../data/supervisor/store";
import type { HomeAssistant, Route } from "../../../../../types";
import "../../components/supervisor-apps-card-content";
import "../components/supervisor-app-metric";
import "./supervisor-app-system-managed";
import "../components/supervisor-app-update-available-card";
declare class SupervisorAppInfo extends LitElement {
    narrow: boolean;
    route: Route;
    hass: HomeAssistant;
    addon: HassioAddonDetails | StoreAddonDetails;
    controlEnabled: boolean;
    private _metrics?;
    private _error?;
    private _fetchDataTimeout?;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    protected updated(changedProps: PropertyValues<this>): void;
    private _scheduleDataUpdate;
    private _loadData;
    private get _computeHassioApi();
    private get _computeApparmorClassName();
    private _showMoreInfo;
    private _showSystemManagedInfo;
    private get _computeIsRunning();
    private get _pathWebui();
    private get _computeShowWebUI();
    private _openIngress;
    private get _computeShowIngressUI();
    private get _computeCannotIngressSidebar();
    private get _computeUsesProtectedOptions();
    private _startOnBootToggled;
    private _watchdogToggled;
    private _autoUpdateToggled;
    private _protectionToggled;
    private _panelToggled;
    private _openChangelog;
    private _updateComplete;
    private _installClicked;
    private _stopClicked;
    private _restartClicked;
    private _rebuildClicked;
    private _startClicked;
    private _openConfiguration;
    private _uninstallClicked;
    private _isSystemManaged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-info": SupervisorAppInfo;
    }
}
export {};
