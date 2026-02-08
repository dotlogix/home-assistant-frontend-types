import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/chips/ha-assist-chip";
import "../../../../components/chips/ha-chip-set";
import "../../../../components/ha-alert";
import "../../../../components/ha-area-picker";
import "../../../../components/ha-domain-icon";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-labels-picker";
import "../../../../components/ha-suggest-with-ai-button";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-textfield";
import "../../../../components/ha-wa-dialog";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../category/ha-category-picker";
import type { HomeAssistant } from "../../../../types";
import type { SceneSaveDialogParams } from "./show-dialog-scene-save";
declare class DialogSceneSave extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _error;
    private _visibleOptionals;
    private _entryUpdates;
    private _params;
    private _newName?;
    private _newIcon?;
    showDialog(params: SceneSaveDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected _renderOptionalChip(id: string, label: string): import("lit-html").TemplateResult<1> | typeof nothing;
    protected _renderInputs(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _addOptional;
    private _registryEntryChanged;
    private _iconChanged;
    private _valueChanged;
    private _handleDiscard;
    private _generateTask;
    private _handleSuggestion;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-scene-save": DialogSceneSave;
    }
}
export {};
