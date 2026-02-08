import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-check-list-item";
import "../ha-checkbox";
import "../ha-dropdown";
import "../ha-dropdown-item";
import "../ha-formfield";
import "../ha-icon-button";
import "../ha-picker-field";
import type { HaDropdownItem } from "../ha-dropdown-item";
import type { HaFormElement, HaFormMultiSelectData, HaFormMultiSelectSchema } from "./types";
export declare class HaFormMultiSelect extends LitElement implements HaFormElement {
    schema: HaFormMultiSelectSchema;
    data: HaFormMultiSelectData;
    label: string;
    disabled: boolean;
    private _dropdown;
    focus(): void;
    protected render(): TemplateResult;
    protected _toggleItem(ev: CustomEvent<{
        item: HaDropdownItem;
    }>): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _handleValueChanged;
    private _showDropdown;
    private _handleKeydown;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-multi_select": HaFormMultiSelect;
    }
}
