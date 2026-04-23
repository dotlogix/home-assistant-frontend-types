import { LitElement, nothing } from "lit";
import "../../../components/ha-select";
import type { RemoteEntity } from "../../../data/remote";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoRemote extends LitElement {
    hass: HomeAssistant;
    stateObj?: RemoteEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleActivityChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-remote": MoreInfoRemote;
    }
}
export {};
