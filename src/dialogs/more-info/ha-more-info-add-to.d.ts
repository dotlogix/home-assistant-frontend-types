import { LitElement } from "lit";
import "../../components/ha-alert";
import "../../components/ha-icon";
import "../../components/ha-md-list-item";
import "../../components/ha-spinner";
import type { HomeAssistant } from "../../types";
export declare class HaMoreInfoAddTo extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    private _externalActions?;
    private _loading;
    private _loadExternalActions;
    private _actionSelected;
    protected firstUpdated(): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-add-to": HaMoreInfoAddTo;
    }
    interface HASSDomEvents {
        "add-to-action-selected": undefined;
    }
}
