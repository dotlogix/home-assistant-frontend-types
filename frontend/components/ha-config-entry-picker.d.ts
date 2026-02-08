import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-combo-box-item";
import "./ha-domain-icon";
import "./ha-generic-picker";
declare class HaConfigEntryPicker extends LitElement {
    hass: HomeAssistant;
    integration?: string;
    label?: string;
    value: string;
    helper?: string;
    private _configEntries?;
    disabled: boolean;
    required: boolean;
    private _picker;
    open(): void;
    focus(): void;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _rowRenderer;
    private _getConfigEntries;
    private _valueRenderer;
    private _getItems;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-entry-picker": HaConfigEntryPicker;
    }
}
export {};
