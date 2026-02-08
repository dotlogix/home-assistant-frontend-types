import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-color-picker";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-icon-picker";
import "../../../components/ha-switch";
import "../../../components/ha-wa-dialog";
import "../../../components/ha-textarea";
import "../../../components/ha-textfield";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { LabelDetailDialogParams } from "./show-dialog-label-detail";
declare class DialogLabelDetail extends LitElement implements HassDialog<LabelDetailDialogParams> {
    hass: HomeAssistant;
    private _name;
    private _icon;
    private _color;
    private _description;
    private _error?;
    private _params?;
    private _submitting;
    private _open;
    showDialog(params: LabelDetailDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _input;
    private _valueChanged;
    private _updateEntry;
    private _deleteEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-label-detail": DialogLabelDetail;
    }
}
export {};
