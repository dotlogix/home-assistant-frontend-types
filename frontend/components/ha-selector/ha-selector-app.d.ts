import { LitElement } from "lit";
import type { AppSelector, AddonSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-addon-picker";
export declare class HaAppSelector extends LitElement {
    hass: HomeAssistant;
    selector: AppSelector | AddonSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-app": HaAppSelector;
    }
}
