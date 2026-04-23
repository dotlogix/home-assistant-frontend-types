import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-dialog";
import "../../../../../components/ha-qr-code";
import "../../../../../components/ha-spinner";
import type { HomeAssistant } from "../../../../../types";
import type { MatterOpenCommissioningWindowDialogParams } from "./show-dialog-matter-open-commissioning-window";
declare class DialogMatterOpenCommissioningWindow extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _status?;
    private _commissionParams?;
    private _open;
    showDialog(params: MatterOpenCommissioningWindowDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _start;
    private _copyCode;
    closeDialog(): void;
    private _dialogClosed;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-open-commissioning-window": DialogMatterOpenCommissioningWindow;
    }
}
export {};
