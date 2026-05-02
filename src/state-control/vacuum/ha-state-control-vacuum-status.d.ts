import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { VacuumEntity } from "../../data/vacuum";
import type { HomeAssistant } from "../../types";
export declare class HaStateControlVacuumStatus extends LitElement {
    hass: HomeAssistant;
    stateObj: VacuumEntity;
    protected render(): TemplateResult;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-vacuum-status": HaStateControlVacuumStatus;
    }
}
