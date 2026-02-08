import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
declare class SupervisorAppsCardContent extends LitElement {
    hass: HomeAssistant;
    title: string;
    description?: string;
    available: boolean;
    showTopbar: boolean;
    topbarClass?: string;
    iconTitle?: string;
    iconClass?: string;
    icon: string;
    iconImage?: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-apps-card-content": SupervisorAppsCardContent;
    }
}
export {};
