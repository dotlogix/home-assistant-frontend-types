import { LitElement } from "lit";
import type { AutomationBehavior, AutomationBehaviorSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-input-helper-text";
import "../ha-select-box";
export declare class HaSelectorAutomationBehavior extends LitElement {
    hass: HomeAssistant;
    selector: AutomationBehaviorSelector;
    value?: AutomationBehavior;
    helper?: string;
    localizeValue?: (key: string) => string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _behaviors;
    private _localizeOption;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-automation_behavior": HaSelectorAutomationBehavior;
    }
}
