import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-card";
import "../../../../../components/ha-dropdown";
import "../../../../../components/ha-dropdown-item";
import "../../../../../components/ha-form/ha-form";
import type { HaFormDataContainer, HaFormSchema } from "../../../../../components/ha-form/types";
import "../../../../../components/ha-formfield";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-switch";
import "../../../../../components/ha-yaml-editor";
import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import type { HomeAssistant } from "../../../../../types";
declare class SupervisorAppConfig extends LitElement {
    addon: HassioAddonDetails;
    hass: HomeAssistant;
    disabled: boolean;
    private _configHasChanged;
    private _valid;
    private _canShowSchema;
    private _showOptional;
    private _error?;
    private _options?;
    private _yamlMode;
    private _editor?;
    private _getTranslationEntry;
    computeLabel: (entry: HaFormSchema, _data: HaFormDataContainer, options?: {
        path?: string[];
    }) => string;
    computeHelper: (entry: HaFormSchema, options?: {
        path?: string[];
    }) => string;
    private _convertSchema;
    private _convertSchemaElements;
    private _convertSchemaElement;
    private _convertSchemaElementToSelector;
    private _filteredSchema;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues): void;
    private _handleAction;
    private _toggleOptional;
    private _configChanged;
    private _resetTapped;
    private _saveTapped;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-config": SupervisorAppConfig;
    }
}
export {};
