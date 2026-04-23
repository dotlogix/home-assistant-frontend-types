import { LitElement, nothing } from "lit";
import type { PropertyValues } from "lit";
import type { ClockCardConfig } from "../types";
import type { HomeAssistant } from "../../../../types";
export declare class HuiClockCardDigital extends LitElement {
    hass?: HomeAssistant;
    config?: ClockCardConfig;
    private _dateTimeFormat?;
    private _timeHour?;
    private _timeMinute?;
    private _timeSecond?;
    private _timeAmPm?;
    private _tickInterval?;
    private _initDate;
    protected updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _startTick;
    private _stopTick;
    private _tick;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-clock-card-digital": HuiClockCardDigital;
    }
}
