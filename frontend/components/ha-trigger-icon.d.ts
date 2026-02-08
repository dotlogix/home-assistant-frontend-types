import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon";
import "./ha-svg-icon";
export declare const TRIGGER_ICONS: {
    calendar: string;
    device: string;
    event: string;
    state: string;
    geo_location: string;
    homeassistant: string;
    mqtt: string;
    numeric_state: string;
    sun: string;
    conversation: string;
    tag: string;
    template: string;
    time: string;
    time_pattern: string;
    webhook: string;
    persistent_notification: string;
    zone: string;
    list: string;
};
export declare class HaTriggerIcon extends LitElement {
    hass: HomeAssistant;
    trigger?: string;
    icon?: string;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trigger-icon": HaTriggerIcon;
    }
}
