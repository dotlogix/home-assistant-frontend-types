import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-entities-picker";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-dialog";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { EditHomeDialogParams } from "./show-dialog-edit-home";
export declare class DialogEditHome extends LitElement implements HassDialog<EditHomeDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _config?;
    private _open;
    private _submitting;
    showDialog(params: EditHomeDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _favoriteEntitiesChanged;
    private _save;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-edit-home": DialogEditHome;
    }
}
