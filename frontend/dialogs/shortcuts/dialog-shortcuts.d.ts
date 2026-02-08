import { LitElement } from "lit";
import "../../components/ha-alert";
import "../../components/ha-svg-icon";
import "../../components/ha-wa-dialog";
import type { HomeAssistant } from "../../types";
declare class DialogShortcuts extends LitElement {
    hass: HomeAssistant;
    private _open;
    showDialog(): Promise<void>;
    private _dialogClosed;
    closeDialog(): Promise<boolean>;
    private _renderShortcut;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-shortcuts": DialogShortcuts;
    }
}
export {};
