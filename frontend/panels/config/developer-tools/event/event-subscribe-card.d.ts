import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-textfield";
import "../../../../components/ha-yaml-editor";
import "../../../../components/ha-button";
import "../../../../components/ha-alert";
import type { HomeAssistant } from "../../../../types";
declare class EventSubscribeCard extends LitElement {
    hass?: HomeAssistant;
    selectedEventType: string;
    private _eventType;
    private _subscribed?;
    private _eventFilter;
    private _events;
    private _error?;
    private _eventCount;
    _ignoredEventsCount: number;
    disconnectedCallback(): void;
    protected willUpdate(changedProperties: Map<string, any>): void;
    protected render(): TemplateResult;
    private _valueChanged;
    private _filterChanged;
    private _testEventFilter;
    private _startOrStopListening;
    private _clearEvents;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "event-subscribe-card": EventSubscribeCard;
    }
}
export {};
