import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/chips/ha-chip-set";
import "../../../components/chips/ha-input-chip";
import "../../../components/ha-alert";
import "../../../components/ha-aliases-editor";
import "../../../components/ha-area-picker";
import "../../../components/ha-button";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-floor-icon";
import "../../../components/ha-icon-picker";
import "../../../components/ha-settings-row";
import "../../../components/ha-svg-icon";
import "../../../components/ha-textfield";
import "../../../components/ha-wa-dialog";
import type { HomeAssistant } from "../../../types";
import type { FloorRegistryDetailDialogParams } from "./show-dialog-floor-registry-detail";
declare class DialogFloorDetail extends LitElement {
    hass: HomeAssistant;
    private _name;
    private _aliases;
    private _icon;
    private _level;
    private _error?;
    private _params?;
    private _submitting?;
    private _addedAreas;
    private _removedAreas;
    private _open;
    showDialog(params: FloorRegistryDetailDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    private _floorAreas;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _openArea;
    private _removeArea;
    private _addArea;
    private _nameChanged;
    private _levelChanged;
    private _iconChanged;
    private _updateEntry;
    private _aliasesChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-floor-registry-detail": DialogFloorDetail;
    }
}
export {};
