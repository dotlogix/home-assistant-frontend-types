import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import type { Trace } from "../data/trace";
import "./ha-button";
import "./ha-generic-picker";
declare class HaTracePicker extends LitElement {
    hass: HomeAssistant;
    traces: Trace[];
    value?: string;
    private tracePicker?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _openPicker;
    private _getTraces;
    private _renderTracePickerValue;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trace-picker": HaTracePicker;
    }
}
export {};
