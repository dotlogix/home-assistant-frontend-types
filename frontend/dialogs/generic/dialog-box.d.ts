import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-dialog-footer";
import "../../components/ha-dialog-header";
import "../../components/ha-svg-icon";
import "../../components/ha-textfield";
import "../../components/ha-wa-dialog";
import type { HomeAssistant } from "../../types";
import type { DialogBoxParams } from "./show-dialog-box";
declare class DialogBox extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _closeState?;
    private _textField?;
    private _closePromise?;
    private _closeResolve?;
    showDialog(params: DialogBoxParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _cancel;
    private _dismiss;
    private _confirm;
    private _closeDialog;
    private _dialogClosed;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-box": DialogBox;
    }
}
export {};
