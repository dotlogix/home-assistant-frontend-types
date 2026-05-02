import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LabelRegistryEntry } from "../../data/label/label_registry";
import "../chips/ha-chip-set";
import "../ha-dropdown";
import "../ha-dropdown-item";
import "../ha-icon";
import "../ha-label";
declare class HaDataTableLabels extends LitElement {
    labels: LabelRegistryEntry[];
    protected render(): TemplateResult;
    private _renderLabel;
    private _labelClicked;
    private _handleDropdownSelect;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-data-table-labels": HaDataTableLabels;
    }
    interface HASSDomEvents {
        "label-clicked": {
            label: LabelRegistryEntry;
        };
    }
}
export {};
