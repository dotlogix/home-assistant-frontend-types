import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import type { HomeAssistant } from "../../../../../types";
declare class SupervisorAppSystemManaged extends LitElement {
    narrow: boolean;
    hass: HomeAssistant;
    hideButton: boolean;
    protected render(): TemplateResult;
    private _takeControl;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-system-managed": SupervisorAppSystemManaged;
    }
    interface HASSDomEvents {
        "system-managed-take-control": undefined;
    }
}
export {};
