import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../../types";
import type { RegistryDialogParams } from "./show-dialog-registries";
declare class AppsRegistriesDialog extends LitElement {
    hass: HomeAssistant;
    private _dialogParams?;
    private _input;
    private _open;
    private _submitting;
    showDialog(dialogParams: RegistryDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): TemplateResult;
    private _computeLabel;
    private _valueChanged;
    private _addRegistry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-apps-registries": AppsRegistriesDialog;
    }
}
export {};
