import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-dropdown";
import "../../../../components/ha-dropdown-item";
import "../../../../components/ha-spinner";
import "../../../../components/ha-yaml-editor";
import type { HomeAssistant } from "../../../../types";
import "./hui-view-footer-settings-editor";
import type { EditViewFooterDialogParams } from "./show-edit-view-footer-dialog";
export declare class HuiDialogEditViewFooter extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _config?;
    private _saving;
    private _dirty;
    private _yamlMode;
    private _editor?;
    private _open;
    protected updated(changedProperties: PropertyValues): void;
    showDialog(params: EditViewFooterDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | TemplateResult<1>;
    private _handleAction;
    private _configChanged;
    private _viewYamlChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-edit-view-footer": HuiDialogEditViewFooter;
    }
}
