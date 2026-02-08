import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
export declare class VoiceAssistantBrandicon extends LitElement {
    hass: HomeAssistant;
    voiceAssistantId: string;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "voice-assistant-brand-icon": VoiceAssistantBrandicon;
    }
}
