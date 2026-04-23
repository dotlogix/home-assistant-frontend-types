import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-dropdown";
import "../../../../components/ha-dropdown-item";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../types";
import type { PanelDetailDialogParams } from "./show-dialog-panel-detail";
export declare class DialogPanelDetail extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _data?;
    private _error?;
    private _submitting;
    private _open;
    showDialog(params: PanelDetailDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _schema;
    private _computeLabel;
    private _computeHelper;
    private _valueChanged;
    private _handleError;
    private _resetPanel;
    private _updatePanel;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-panel-detail": DialogPanelDetail;
    }
}
