import "@home-assistant/webawesome/dist/components/divider/divider";
import { LitElement, nothing, type PropertyValues, type TemplateResult } from "lit";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-fab";
import "../../../components/ha-floor-icon";
import "../../../components/ha-icon-button";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../types";
export declare class HaConfigAreasDashboard extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _searchParms;
    private _hierarchy?;
    private _blockHierarchyUpdate;
    private _blockHierarchyUpdateTimeout?;
    private _processAreasStats;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _computeHierarchy;
    protected render(): TemplateResult<1> | typeof nothing;
    private _renderArea;
    protected firstUpdated(changedProps: any): void;
    private _openAreaDetails;
    private _areaMoved;
    private _areaAdded;
    private _blockHierarchyUpdateFor;
    private _handleFloorAction;
    private _handleUnassignedAreasAction;
    private _createFloor;
    private _editFloor;
    private _deleteFloor;
    private _createArea;
    private _showReorderDialog;
    private _showHelp;
    private _openAreaDialog;
    private _openFloorDialog;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-areas-dashboard": HaConfigAreasDashboard;
    }
}
