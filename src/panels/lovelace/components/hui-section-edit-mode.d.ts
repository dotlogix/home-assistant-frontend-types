import "@home-assistant/webawesome/dist/components/divider/divider";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { Lovelace } from "../types";
export declare class HuiSectionEditMode extends LitElement {
    hass: HomeAssistant;
    lovelace: Lovelace;
    index: number;
    viewIndex: number;
    protected render(): TemplateResult;
    private _handleDropdownSelect;
    private _editSection;
    private _duplicateSection;
    private _deleteSection;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section-edit-mode": HuiSectionEditMode;
    }
}
