import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-attribute-value";
import "../../components/ha-card";
import type { ExtEntityRegistryEntry } from "../../data/entity/entity_registry";
import type { HomeAssistant } from "../../types";
import "../../components/ha-yaml-editor";
interface DetailsViewParams {
    entityId: string;
}
declare class HaMoreInfoDetails extends LitElement {
    hass: HomeAssistant;
    entry?: ExtEntityRegistryEntry | null;
    params?: DetailsViewParams;
    yamlMode: boolean;
    private _stateObj?;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _getDetailData;
    private _formatTimestamp;
    private _renderAttributes;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-details": HaMoreInfoDetails;
    }
}
export {};
