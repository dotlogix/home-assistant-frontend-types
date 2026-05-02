import type { HassServiceTarget } from "home-assistant-js-websocket";
import { LitElement, type TemplateResult } from "lit";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
export declare class HaAutomationRowTargets extends LitElement {
    hass: HomeAssistant;
    target?: HassServiceTarget;
    targetRequired: boolean;
    private _i18n;
    private _registries;
    private _labelRegistry;
    private _states;
    private _configEntryLookup?;
    protected render(): TemplateResult<1> | TemplateResult<1>[];
    private _getLabel;
    private _checkTargetExists;
    private _renderTargetBadge;
    private _renderTarget;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-row-targets": HaAutomationRowTargets;
    }
}
