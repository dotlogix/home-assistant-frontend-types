import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-wa-dialog";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-icon-picker";
import "../../../components/ha-button";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
import type { CategoryRegistryDetailDialogParams } from "./show-dialog-category-registry-detail";
declare class DialogCategoryDetail extends LitElement {
    hass: HomeAssistant;
    private _name;
    private _icon;
    private _error?;
    private _params?;
    private _submitting?;
    private _open;
    showDialog(params: CategoryRegistryDetailDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _isNameValid;
    private _nameChanged;
    private _iconChanged;
    private _updateEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-category-registry-detail": DialogCategoryDetail;
    }
}
export {};
