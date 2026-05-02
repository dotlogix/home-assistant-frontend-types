import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-dialog";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-form/ha-form";
import "../../../components/ha-icon";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import "../components/home-favorites-editor";
import "../components/home-shortcuts-editor";
import type { EditHomeDialogParams } from "./show-dialog-edit-home";
export declare class DialogEditHome extends LitElement implements HassDialog<EditHomeDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _state?;
    private _open;
    private _submitting;
    showDialog(params: EditHomeDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _suggestedSchema;
    private _computeWelcomeLabel;
    private _computeWelcomeHelper;
    private _computeSuggestedLabel;
    private _computeSuggestedHelper;
    private _favoriteEntitiesChanged;
    private _welcomeChanged;
    private _suggestedChanged;
    private _shortcutsChanged;
    private _save;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-edit-home": DialogEditHome;
    }
}
