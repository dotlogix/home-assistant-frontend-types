import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-combo-box-item";
import "./ha-generic-picker";
import "./ha-service-icon";
declare class HaServicePicker extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    label?: string;
    placeholder?: string;
    value?: string;
    showServiceId: boolean;
    private _picker?;
    open(): Promise<void>;
    protected firstUpdated(props: PropertyValues<this>): void;
    private _rowRenderer;
    private _valueRenderer;
    protected render(): TemplateResult;
    private _getItems;
    private _services;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-picker": HaServicePicker;
    }
}
export {};
