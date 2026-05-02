import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import "../components/input/ha-input";
import type { HomeAssistant } from "../types";
declare class StateCardInputText extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    value: string;
    protected render(): TemplateResult;
    protected willUpdate(changedProp: PropertyValues<this>): void;
    private _onInput;
    private _selectedValueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-input_text": StateCardInputText;
    }
}
export {};
