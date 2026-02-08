import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-alert";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-menu-button";
import "../../components/ha-top-app-bar-fixed";
import type { HomeAssistant, PanelInfo } from "../../types";
import "../lovelace/components/hui-energy-period-selector";
import "../lovelace/hui-root";
import "../lovelace/views/hui-view";
import "../lovelace/views/hui-view-container";
export declare const DEFAULT_ENERGY_COLLECTION_KEY = "energy_dashboard";
declare class PanelEnergy extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    panel?: PanelInfo;
    private _lovelace?;
    route?: {
        path: string;
        prefix: string;
    };
    private _prefs?;
    private _searchParms;
    private _error?;
    private get _extraActionItems();
    willUpdate(changedProps: PropertyValues): void;
    private _fetchEnergyPrefs;
    private _loadConfig;
    private _setLovelace;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _generateLovelaceConfig;
    private _navigateConfig;
    private _dumpCSV;
    private _reloadConfig;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-energy": PanelEnergy;
    }
}
declare global {
    interface HASSDomEvents {
        "reload-energy-panel": undefined;
    }
}
export {};
