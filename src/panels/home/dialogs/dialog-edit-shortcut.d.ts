import { LitElement, nothing, type PropertyValues } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-dialog";
import "../../../components/ha-form/ha-form";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { EditShortcutDialogParams } from "./show-dialog-edit-shortcut";
export declare class DialogEditShortcut extends LitElement implements HassDialog<EditShortcutDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _data?;
    private _open;
    private _navInfo;
    showDialog(params: EditShortcutDialogParams): void;
    protected willUpdate(changedProps: PropertyValues): void;
    closeDialog(): boolean;
    private _dialogClosed;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeLabel;
    private _valueChanged;
    private _save;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-edit-shortcut": DialogEditShortcut;
    }
}
