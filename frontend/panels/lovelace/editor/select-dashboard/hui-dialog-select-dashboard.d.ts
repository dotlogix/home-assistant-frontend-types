import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-wa-dialog";
import "../../../../components/ha-md-select";
import "../../../../components/ha-md-select-option";
import "../../../../components/ha-spinner";
import type { HomeAssistant } from "../../../../types";
import type { SelectDashboardDialogParams } from "./show-select-dashboard-dialog";
export declare class HuiDialogSelectDashboard extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _dashboards?;
    private _fromUrlPath?;
    private _toUrlPath?;
    private _config?;
    private _saving;
    private _open;
    showDialog(params: SelectDashboardDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _getDashboards;
    private _dashboardChanged;
    private _selectDashboard;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-select-dashboard": HuiDialogSelectDashboard;
    }
}
