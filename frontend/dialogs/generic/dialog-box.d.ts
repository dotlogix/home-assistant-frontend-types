import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-dialog";
import "../../components/ha-dialog-footer";
import "../../components/ha-dialog-header";
import "../../components/ha-svg-icon";
import "../../components/input/ha-input";
import type { HomeAssistant } from "../../types";
import type { DialogBoxParams } from "./show-dialog-box";
declare class DialogBox extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _closeState?;
    private _loading;
    private _validInput;
    private _textField?;
    private _closePromise?;
    private _closeResolve?;
    showDialog(params: DialogBoxParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _cancel;
    private _dismiss;
    private _confirm;
    private _validateInput;
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
