import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../types";
import "../../../lovelace/editor/dashboard-strategy-editor/hui-dashboard-strategy-element-editor";
import type { LovelaceDashboardConfigureStrategyDialogParams } from "./show-dialog-lovelace-dashboard-configure-strategy";
export declare class DialogLovelaceDashboardConfigureStrategy extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _submitting;
    private _data?;
    showDialog(params: LovelaceDashboardConfigureStrategyDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleConfigChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-lovelace-dashboard-configure-strategy": DialogLovelaceDashboardConfigureStrategy;
    }
}
