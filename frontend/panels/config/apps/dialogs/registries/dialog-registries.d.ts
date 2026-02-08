import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-form/ha-form";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-settings-row";
import "../../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../../types";
declare class AppsRegistriesDialog extends LitElement {
    hass: HomeAssistant;
    private _registries?;
    private _input;
    private _opened;
    private _addingRegistry;
    protected render(): TemplateResult;
    private _computeLabel;
    private _valueChanged;
    showDialog(): Promise<void>;
    closeDialog(): void;
    focus(): void;
    private _loadRegistries;
    private _addRegistry;
    private _addNewRegistry;
    private _removeRegistry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-apps-registries": AppsRegistriesDialog;
    }
}
export {};
