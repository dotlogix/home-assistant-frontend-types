import { LitElement, nothing } from "lit";
import "../../../components/ha-md-list";
import "../../../components/ha-md-list-item";
import "../../../components/ha-dialog";
import type { HomeAssistant } from "../../../types";
import type { PickConfigEntryDialogParams } from "./show-pick-config-entry-dialog";
export declare class DialogPickConfigEntry extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: PickConfigEntryDialogParams): void;
    private _dialogClosed;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _itemPicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-pick-config-entry": DialogPickConfigEntry;
    }
}
