import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-entity-picker";
import "../../../components/ha-alert";
import "../../../components/ha-aliases-editor";
import "../../../components/ha-button";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-floor-picker";
import "../../../components/ha-icon-picker";
import "../../../components/ha-labels-picker";
import "../../../components/ha-picture-upload";
import "../../../components/ha-settings-row";
import "../../../components/ha-suggest-with-ai-button";
import "../../../components/input/ha-input";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { AreaRegistryDetailDialogParams } from "./show-dialog-area-registry-detail";
declare class DialogAreaDetail extends LitElement implements HassDialog<AreaRegistryDetailDialogParams> {
    hass: HomeAssistant;
    private _name;
    private _aliases;
    private _labels;
    private _picture;
    private _icon;
    private _floor;
    private _temperatureEntity;
    private _humidityEntity;
    private _error?;
    private _params?;
    private _submitting;
    private _open;
    private _suggestionInclude;
    showDialog(params: AreaRegistryDetailDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _dialogClosed;
    private _renderSettings;
    private _renderAliasExpansion;
    private _renderRelatedEntitiesExpansion;
    private _getLabelNames;
    private _generateTask;
    private _handleSuggestion;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _isNameValid;
    private _areaEntityFilter;
    private _nameChanged;
    private _floorChanged;
    private _iconChanged;
    private _labelsChanged;
    private _pictureChanged;
    private _aliasesChanged;
    private _sensorChanged;
    private _updateEntry;
    private _deleteArea;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-area-registry-detail": DialogAreaDetail;
    }
}
export {};
