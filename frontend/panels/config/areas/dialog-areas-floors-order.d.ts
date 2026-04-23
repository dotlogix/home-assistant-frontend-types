import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-floor-icon";
import "../../../components/ha-icon";
import "../../../components/ha-md-list";
import "../../../components/ha-md-list-item";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import "../../../components/ha-dialog";
import type { HomeAssistant } from "../../../types";
import type { AreasFloorsOrderDialogParams } from "./show-dialog-areas-floors-order";
declare class DialogAreasFloorsOrder extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _hierarchy?;
    private _saving;
    showDialog(_params: AreasFloorsOrderDialogParams): Promise<void>;
    private _computeHierarchy;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderFloor;
    private _renderUnassignedAreas;
    private _renderArea;
    private _floorMoved;
    private _areaMoved;
    private _areaAdded;
    private _computeFloorChanges;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-areas-floors-order": DialogAreasFloorsOrder;
    }
}
export {};
