import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import type { HomeAssistant } from "../types";
declare class HaAbsoluteTime extends ReactiveElement {
    hass: HomeAssistant;
    datetime?: string | Date;
    private _timeout?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected createRenderRoot(): this;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected update(changedProps: PropertyValues<this>): void;
    private _clearTimeout;
    private _updateNextDay;
    private _updateAbsolute;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-absolute-time": HaAbsoluteTime;
    }
}
export {};
