import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-button";
import "../../../components/ha-md-list-item";
import "../../../components/ha-switch";
import "../../../components/input/ha-input";
import type { CloudStatusLoggedIn } from "../../../data/cloud";
import type { ExposeEntitySettings } from "../../../data/expose";
import type { HomeAssistant } from "../../../types";
import "../../../components/voice-assistant-brand-icon";
export declare class CloudGooglePref extends LitElement {
    hass: HomeAssistant;
    exposedEntities?: Record<string, ExposeEntitySettings>;
    cloudStatus?: CloudStatusLoggedIn;
    private _exposeNew?;
    protected willUpdate(): void;
    private _exposedEntitiesCount;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _exposeNewToggleChanged;
    private _enabledToggleChanged;
    private _reportToggleChanged;
    private _pinChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-google-pref": CloudGooglePref;
    }
}
