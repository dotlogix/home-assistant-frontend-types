import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-alert";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-menu-button";
import "../../components/ha-top-app-bar-fixed";
import type { HomeAssistant, PanelInfo } from "../../types";
import "../lovelace/hui-root";
import "../lovelace/views/hui-view";
import "../lovelace/views/hui-view-container";
declare class PanelEnergy extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    panel?: PanelInfo;
    private _lovelace?;
    route?: {
        path: string;
        prefix: string;
    };
    private _searchParms;
    private _error?;
    willUpdate(changedProps: PropertyValues): void;
    private _setup;
    private _loadConfig;
    private _setLovelace;
    protected render(): import("lit-html").TemplateResult<1>;
    private _navigateConfig;
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
