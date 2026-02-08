import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-attribute-value";
import "../../components/ha-card";
import type { ExtEntityRegistryEntry } from "../../data/entity/entity_registry";
import type { HomeAssistant } from "../../types";
interface AttributesViewParams {
    entityId: string;
}
declare class HaMoreInfoAttributes extends LitElement {
    hass: HomeAssistant;
    entry?: ExtEntityRegistryEntry | null;
    params?: AttributesViewParams;
    private _stateObj?;
    protected willUpdate(changedProps: PropertyValues): void;
    private _computeDisplayAttributes;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-attributes": HaMoreInfoAttributes;
    }
}
export {};
