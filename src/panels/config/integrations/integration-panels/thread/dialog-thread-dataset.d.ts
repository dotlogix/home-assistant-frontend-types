import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../../types";
import type { DialogThreadDatasetParams } from "./show-dialog-thread-dataset";
import "../../../../../components/ha-dialog";
declare class DialogThreadDataset extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: DialogThreadDatasetParams): Promise<Promise<void>>;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-thread-dataset": DialogThreadDataset;
    }
}
export {};
