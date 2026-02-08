import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-generic-picker";
declare class HaEntityAttributePicker extends LitElement {
    hass: HomeAssistant;
    entityId?: string | string[];
    /**
     * List of attributes to be hidden.
     * @type {Array}
     * @attr hide-attributes
     */
    hideAttributes?: string[];
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomValue: any;
    label?: string;
    value?: string;
    helper?: string;
    private _getItemsMemoized;
    private _getItems;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-attribute-picker": HaEntityAttributePicker;
    }
}
export {};
