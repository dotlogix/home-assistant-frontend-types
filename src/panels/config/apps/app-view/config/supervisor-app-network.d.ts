import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-card";
import "../../../../../components/ha-formfield";
import "../../../../../components/ha-form/ha-form";
import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import type { HomeAssistant } from "../../../../../types";
declare class SupervisorAppNetwork extends LitElement {
    hass: HomeAssistant;
    addon: HassioAddonDetails;
    disabled: boolean;
    private _showOptional;
    private _configHasChanged;
    private _error?;
    private _config?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _createSchema;
    private _computeLabel;
    private _computeHelper;
    private _setNetworkConfig;
    private _configChanged;
    private _resetTapped;
    private _toggleOptional;
    private _saveTapped;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-network": SupervisorAppNetwork;
    }
}
export {};
