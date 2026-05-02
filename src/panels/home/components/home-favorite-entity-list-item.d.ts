import { LitElement } from "lit";
import "../../../components/entity/state-badge";
import "../../../components/ha-icon-button";
import "../../../components/ha-settings-row";
import type { HomeAssistant } from "../../../types";
declare global {
    interface HASSDomEvents {
        "delete-favorite-entity": {
            index: number;
        };
    }
    interface HTMLElementTagNameMap {
        "home-favorite-entity-list-item": HomeFavoriteEntityListItem;
    }
}
export declare class HomeFavoriteEntityListItem extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    index: number;
    protected render(): import("lit-html").TemplateResult<1>;
    private _delete;
    static styles: import("lit").CSSResult;
}
