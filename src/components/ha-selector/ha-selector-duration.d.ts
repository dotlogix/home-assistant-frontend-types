import { LitElement } from "lit";
import type { DurationSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-duration-input";
import type { HaDurationData } from "../ha-duration-input";
export declare class HaTimeDuration extends LitElement {
    hass: HomeAssistant;
    selector: DurationSelector;
    value?: HaDurationData | string | number;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _input?;
    reportValidity(): boolean;
    private _data;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-duration": HaTimeDuration;
    }
}
