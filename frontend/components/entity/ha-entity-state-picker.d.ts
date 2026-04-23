import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-generic-picker";
import type { PickerComboBoxItem } from "../ha-picker-combo-box";
export declare class HaEntityStatePicker extends LitElement {
    hass: HomeAssistant;
    entityId?: string | string[];
    attribute?: string;
    extraOptions?: PickerComboBoxItem[];
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomValue: any;
    hideStates?: string[];
    label?: string;
    value?: string;
    helper?: string;
    private _getItems;
    private _getFilteredItems;
    private _valueRenderer;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-state-picker": HaEntityStatePicker;
    }
}
