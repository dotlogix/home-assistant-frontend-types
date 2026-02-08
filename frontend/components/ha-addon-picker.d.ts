import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-alert";
import "./ha-combo-box-item";
import "./ha-generic-picker";
declare class HaAddonPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value: string;
    helper?: string;
    private _addons?;
    disabled: boolean;
    required: boolean;
    private _genericPicker;
    private _error?;
    open(): void;
    focus(): void;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _getApps;
    private _getItems;
    private get _value();
    private _addonChanged;
    private _setValue;
    private _valueRenderer;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-addon-picker": HaAddonPicker;
    }
}
export {};
