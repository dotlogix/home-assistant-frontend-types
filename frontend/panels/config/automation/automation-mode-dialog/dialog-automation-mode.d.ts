import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-wa-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-md-list-item";
import "../../../../components/ha-md-list";
import "../../../../components/ha-radio";
import "../../../../components/ha-button";
import "../../../../components/ha-textfield";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { AutomationModeDialog } from "./show-dialog-automation-mode";
declare class DialogAutomationMode extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _open;
    private _params?;
    private _newMode;
    private _newMax?;
    showDialog(params: AutomationModeDialog): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _modeChanged;
    private _valueChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-automation-mode": DialogAutomationMode;
    }
}
export {};
