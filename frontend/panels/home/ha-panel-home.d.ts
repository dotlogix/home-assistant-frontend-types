import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-svg-icon";
import type { HomeAssistant, PanelInfo, Route } from "../../types";
import "../lovelace/hui-root";
declare class PanelHome extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route?: Route;
    panel?: PanelInfo;
    private _lovelace?;
    private _config;
    private _extraActionItems?;
    private get _showBanner();
    private _bannerHeight;
    willUpdate(changedProps: PropertyValues): void;
    private _setup;
    private _debounceRegistriesChanged;
    private _registriesChanged;
    private _updateExtraActionItems;
    private _editHome;
    private _editArea;
    private _handleLLCustomEvent;
    private _showAddIntegrationDialog;
    private _showAssignAreaDialog;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderBanner;
    protected updated(changedProps: PropertyValues): void;
    private _learnMore;
    private _setLovelace;
    private _saveConfig;
    static readonly styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-home": PanelHome;
    }
}
export {};
