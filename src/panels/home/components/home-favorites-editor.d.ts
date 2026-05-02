import { LitElement } from "lit";
import "../../../components/entity/ha-entity-picker";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import "./home-favorite-entity-list-item";
export declare class HomeFavoritesEditor extends LitElement {
    hass: HomeAssistant;
    favorites: string[];
    label?: string;
    helper?: string;
    protected render(): import("lit-html").TemplateResult<1>;
    private _update;
    private _add;
    private _remove;
    private _moved;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-favorites-editor": HomeFavoritesEditor;
    }
}
