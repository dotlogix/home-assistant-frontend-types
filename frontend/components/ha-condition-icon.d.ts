import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon";
import "./ha-svg-icon";
export declare const CONDITION_ICONS: {
    device: string;
    and: string;
    or: string;
    not: string;
    state: string;
    numeric_state: string;
    sun: string;
    template: string;
    time: string;
    trigger: string;
    zone: string;
};
export declare class HaConditionIcon extends LitElement {
    hass: HomeAssistant;
    condition?: string;
    icon?: string;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-condition-icon": HaConditionIcon;
    }
}
