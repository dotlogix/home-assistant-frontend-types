import { type CSSResultGroup, LitElement, nothing, type PropertyValues } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-faded";
import "../../../../../components/ha-markdown";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-switch";
import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import type { HomeAssistant } from "../../../../../types";
declare global {
    interface HASSDomEvents {
        "update-complete": undefined;
    }
}
declare class SupervisorAppUpdateAvailableCard extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    addon: HassioAddonDetails;
    private _changelogContent?;
    private _updating;
    private _error?;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _computeCreateBackupTexts;
    get _shouldCreateBackup(): boolean;
    private _loadAddonData;
    private _update;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-update-available-card": SupervisorAppUpdateAvailableCard;
    }
}
export {};
