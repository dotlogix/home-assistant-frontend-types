import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-icon-next";
import "../../../../components/ha-list";
import "../../../../components/ha-list-item";
import "../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../types";
import type { DeviceAutomationDialogParams } from "./show-dialog-device-automation";
export declare class DialogDeviceAutomation extends LitElement {
    hass: HomeAssistant;
    private _triggers;
    private _conditions;
    private _actions;
    private _params?;
    private _open;
    showDialog(params: DeviceAutomationDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues): void;
    private _handleRowClick;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-device-automation": DialogDeviceAutomation;
    }
}
