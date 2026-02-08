import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-generic-picker";
export declare class HaColorPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    helper?: string;
    value?: string;
    defaultColor?: string;
    includeState: boolean;
    includeNone: boolean;
    disabled: boolean;
    required: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _getAdditionalItems;
    private _getItems;
    private _getColors;
    private _rowRenderer;
    private _valueRenderer;
    private _renderColorCircle;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-color-picker": HaColorPicker;
    }
}
