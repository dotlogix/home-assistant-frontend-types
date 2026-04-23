import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-ripple";
import "../../../components/ha-svg-icon";
import { type LovelaceViewFooterConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiCard } from "../cards/hui-card";
import type { Lovelace } from "../types";
export declare class HuiViewFooter extends LitElement {
    hass: HomeAssistant;
    lovelace: Lovelace;
    card?: HuiCard;
    config?: LovelaceViewFooterConfig;
    viewIndex: number;
    willUpdate(changedProperties: PropertyValues<typeof this>): void;
    private _checkHidden;
    private _createCardElement;
    private _addCard;
    private _deleteCard;
    private _configure;
    private _editCard;
    private _saveFooterConfig;
    private _renderCard;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-footer": HuiViewFooter;
    }
}
