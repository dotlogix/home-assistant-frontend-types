import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/entity/ha-entity-picker";
import "../../components/ha-alert";
import "../../components/ha-button";
import "../../components/ha-date-input";
import "../../components/ha-dialog";
import "../../components/ha-dialog-footer";
import "../../components/ha-formfield";
import "../../components/ha-switch";
import "../../components/ha-textarea";
import "../../components/ha-time-input";
import "../../components/input/ha-input";
import type { HomeAssistant } from "../../types";
import "../lovelace/components/hui-generic-entity-row";
import "./ha-recurrence-rule-editor";
import type { CalendarEventEditDialogParams } from "./show-dialog-calendar-event-editor";
declare class DialogCalendarEventEditor extends LitElement {
    hass: HomeAssistant;
    private _error?;
    private _info?;
    private _params?;
    private _open;
    private _calendarId?;
    private _summary;
    private _description?;
    private _location?;
    private _rrule?;
    private _allDay;
    private _dtstart?;
    private _dtend?;
    private _submitting;
    private _timeZone?;
    private _hasLocation;
    showDialog(params: CalendarEventEditDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _dialogClosed;
    private _isEditableCalendar;
    private _getLocaleStrings;
    private _clearInfo;
    private _handleSummaryChanged;
    private _handleDescriptionChanged;
    private _handleLocationChanged;
    private _handleRRuleChanged;
    private _allDayToggleChanged;
    private _startDateChanged;
    private _endDateChanged;
    private _startTimeChanged;
    private _endTimeChanged;
    private _calculateData;
    private _handleCalendarChanged;
    private _isValidStartEnd;
    private _createEvent;
    private _saveEvent;
    private _deleteEvent;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-calendar-event-editor": DialogCalendarEventEditor;
    }
}
export {};
