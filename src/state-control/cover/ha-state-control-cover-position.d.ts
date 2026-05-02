import type { TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-control-slider";
import type { CoverEntity } from "../../data/cover";
import type { HomeAssistant } from "../../types";
export declare class HaStateControlCoverPosition extends LitElement {
    hass: HomeAssistant;
    stateObj: CoverEntity;
    value?: number;
    protected updated(changedProp: PropertyValues<this>): void;
    private _valueChanged;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-cover-position": HaStateControlCoverPosition;
    }
}
