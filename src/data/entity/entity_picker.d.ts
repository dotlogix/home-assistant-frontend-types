import type { HassEntity } from "home-assistant-js-websocket";
import type { PickerComboBoxItem } from "../../components/ha-picker-combo-box";
import type { FuseWeightedKey } from "../../resources/fuseMultiTerm";
import type { HomeAssistant } from "../../types";
import type { HaEntityPickerEntityFilterFunc } from "./entity";
export interface EntityComboBoxItem extends PickerComboBoxItem {
    domain_name?: string;
    stateObj?: HassEntity;
}
export declare const entityComboBoxKeys: FuseWeightedKey[];
export declare const getEntities: (hass: HomeAssistant, includeDomains?: string[], excludeDomains?: string[], entityFilter?: HaEntityPickerEntityFilterFunc, includeDeviceClasses?: string[], includeUnitOfMeasurement?: string[], includeEntities?: string[], excludeEntities?: string[], value?: string, idPrefix?: string) => EntityComboBoxItem[];
