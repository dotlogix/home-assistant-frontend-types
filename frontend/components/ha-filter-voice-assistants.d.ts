import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-icon";
import "./ha-icon-button";
import "./ha-label";
import "./ha-list";
import "./ha-list-item";
import "./voice-assistant-brand-icon";
import "../panels/config/voice-assistants/expose/expose-assistant-icon";
export declare class HaFilterVoiceAssistants extends LitElement {
    hass: HomeAssistant;
    value: string[];
    narrow: boolean;
    expanded: boolean;
    private _voiceAssistantOptions;
    private _shouldRender;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: any): void;
    protected updated(changed: any): void;
    private _expandedWillChange;
    private _expandedChanged;
    private _assistantsSelected;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-voice-assistants": HaFilterVoiceAssistants;
    }
}
