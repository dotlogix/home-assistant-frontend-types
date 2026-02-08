import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-expansion-panel";
import "../../../../../components/ha-fab";
import "../../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../layouts/hass-subpage";
export declare class MatterConfigDashboard extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _configEntry?;
    private _error?;
    private _unsub?;
    disconnectedCallback(): void;
    protected firstUpdated(changedProperties: PropertyValues): void;
    private _matterDeviceCount;
    protected render(): TemplateResult | typeof nothing;
    private _redirectOnNewMatterDevice;
    private _stopRedirect;
    private _startMobileCommissioning;
    private _setWifi;
    private _commission;
    private _acceptSharedDevice;
    private _setThread;
    private _fetchConfigEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-config-dashboard": MatterConfigDashboard;
    }
}
