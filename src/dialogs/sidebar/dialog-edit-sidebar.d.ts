import { LitElement, type TemplateResult } from "lit";
import "../../components/ha-alert";
import "../../components/ha-button";
import "../../components/ha-dialog-footer";
import "../../components/ha-dropdown";
import "../../components/ha-dropdown-item";
import "../../components/animation/ha-fade-in";
import "../../components/ha-icon-button";
import "../../components/ha-items-display-editor";
import "../../components/ha-spinner";
import "../../components/ha-svg-icon";
import "../../components/ha-dialog";
import type { HomeAssistant } from "../../types";
declare class DialogEditSidebar extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _order?;
    private _hidden?;
    private _error?;
    /**
     * If user has old localStorage values, show a confirmation dialog
     */
    private _migrateToUserData;
    showDialog(): Promise<void>;
    private _getData;
    private _dialogClosed;
    closeDialog(): void;
    private _panels;
    private _renderContent;
    protected render(): TemplateResult<1>;
    private _changed;
    private _resetToDefaults;
    private _save;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-edit-sidebar": DialogEditSidebar;
    }
}
export {};
