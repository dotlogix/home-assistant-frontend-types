import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-icon";
import "./ha-icon-button";
import "./ha-label";
import "./ha-list";
import "./ha-list-item";
import "./input/ha-input-search";
export declare class HaFilterLabels extends LitElement {
    hass: HomeAssistant;
    value?: string[];
    narrow: boolean;
    expanded: boolean;
    private _labels?;
    private _shouldRender;
    private _filter?;
    private _filteredLabels;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changed: any): void;
    private _manageLabels;
    private _expandedWillChange;
    private _expandedChanged;
    private _handleSearchChange;
    private _labelSelected;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-labels": HaFilterLabels;
    }
}
