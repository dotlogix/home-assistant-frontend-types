import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-md-list";
import "../../../../components/ha-md-list-item";
import "../../../../components/ha-radio";
import "../../../../components/input/ha-input";
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
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
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
