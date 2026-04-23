import type { PropertyValues } from "lit";
import type { RouterOptions } from "../../layouts/hass-router-page";
import { HassRouterPage } from "../../layouts/hass-router-page";
import type { PageNavigation } from "../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../types";
declare global {
    interface HASSDomEvents {
        "ha-refresh-cloud-status": undefined;
    }
}
export declare const configSections: Record<string, PageNavigation[]>;
declare class HaPanelConfig extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    protected routerOptions: RouterOptions;
    private _wideSidebar;
    private _wide;
    private _cloudStatus?;
    private _listeners;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updatePageEl(el: any): void;
    private _updateCloudStatus;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-config": HaPanelConfig;
    }
}
export {};
