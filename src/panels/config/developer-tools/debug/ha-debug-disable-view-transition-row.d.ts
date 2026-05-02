import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-md-list-item";
import "../../../../components/ha-switch";
import type { HomeAssistant } from "../../../../types";
declare class HaDebugDisableViewTransitionRow extends LitElement {
    hass: HomeAssistant;
    private _disabled;
    protected render(): TemplateResult;
    private _checkedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-debug-disable-view-transition-row": HaDebugDisableViewTransitionRow;
    }
}
export {};
