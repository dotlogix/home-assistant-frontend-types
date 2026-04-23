import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-form/ha-form";
import "../../components/ha-dialog-footer";
import "../../components/ha-dialog";
import type { HomeAssistant } from "../../types";
import type { HassDialog } from "../make-dialog-manager";
import type { FormDialogData, FormDialogParams } from "./show-form-dialog";
export declare class DialogForm extends LitElement implements HassDialog<FormDialogData> {
    hass?: HomeAssistant;
    private _params?;
    private _data;
    private _open;
    private _closeState?;
    showDialog(params: FormDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _dialogClosed;
    private _submit;
    private _cancel;
    private _valueChanged;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-form": DialogForm;
    }
}
