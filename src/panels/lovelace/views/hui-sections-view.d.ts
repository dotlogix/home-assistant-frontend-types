import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-ripple";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import type { LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiBadge } from "../badges/hui-badge";
import type { HuiCard } from "../cards/hui-card";
import "../components/hui-badge-edit-mode";
import "../components/hui-section-edit-mode";
import type { HuiSection } from "../sections/hui-section";
import "../sections/hui-section-background";
import type { Lovelace } from "../types";
import "./hui-view-footer";
import "./hui-view-header";
import "./hui-view-sidebar";
export declare const DEFAULT_MAX_COLUMNS = 4;
export declare class SectionsView extends LitElement implements LovelaceViewElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    index?: number;
    isStrategy: boolean;
    narrow: boolean;
    sections: HuiSection[];
    cards: HuiCard[];
    badges: HuiBadge[];
    private _config?;
    private _sectionColumnCount;
    private _maxColumns;
    private _maxColumnsProvider;
    _dragging: boolean;
    private _sidebarTabActive;
    private _sidebarVisible;
    private _contentScrollTop;
    private _sidebarScrollTop;
    private _columnsController;
    setConfig(config: LovelaceViewConfig): void;
    private _sectionConfigKeys;
    private _getSectionKey;
    private _computeSectionsCount;
    private _sectionVisibilityChanged;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private _updateMaxColumnCount;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleCardAdded;
    private _importedCardSectionConfig;
    private _renderSection;
    private _createSection;
    private _sectionMoved;
    private _viewChanged;
    private _toggleView;
    private _handleSidebarVisibilityChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-sections-view": SectionsView;
    }
}
