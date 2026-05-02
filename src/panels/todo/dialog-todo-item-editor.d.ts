import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-alert";
import "../../components/ha-button";
import "../../components/ha-checkbox";
import "../../components/ha-date-input";
import "../../components/ha-dialog";
import "../../components/ha-dialog-footer";
import "../../components/ha-textarea";
import "../../components/ha-time-input";
import "../../components/input/ha-input";
import type { HomeAssistant } from "../../types";
import type { TodoItemEditDialogParams } from "./show-dialog-todo-item-editor";
declare class DialogTodoItemEditor extends LitElement {
    hass: HomeAssistant;
    private _error?;
    private _params?;
    private _summary;
    private _description?;
    private _due?;
    private _completedTime?;
    private _checked;
    private _hasTime;
    private _submitting;
    private _open;
    private _timeZone?;
    showDialog(params: TodoItemEditDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _todoListSupportsFeature;
    private _getLocaleStrings;
    private _formatDate;
    private _formatTime;
    private _parseDate;
    private _checkedCanged;
    private _handleSummaryChanged;
    private _handleDescriptionChanged;
    private _dueDateChanged;
    private _dueTimeChanged;
    private _createItem;
    private _saveItem;
    private _deleteItem;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-todo-item-editor": DialogTodoItemEditor;
    }
}
export {};
