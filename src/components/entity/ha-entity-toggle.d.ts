import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-control-switch";
import "../ha-formfield";
import "../ha-icon-button";
export declare class HaEntityToggle extends LitElement {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    label?: string;
    private _isOn;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    willUpdate(changedProps: PropertyValues<this>): void;
    private _toggleChanged;
    private _turnOn;
    private _turnOff;
    private _callService;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-toggle": HaEntityToggle;
    }
}
