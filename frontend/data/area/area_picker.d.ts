import type { HaDevicePickerDeviceFilterFunc } from "../../components/device/ha-device-picker";
import type { PickerComboBoxItem } from "../../components/ha-picker-combo-box";
import type { FuseWeightedKey } from "../../resources/fuseMultiTerm";
import type { HomeAssistant } from "../../types";
import type { HaEntityPickerEntityFilterFunc } from "../entity/entity";
export declare const getAreas: (haAreas: HomeAssistant["areas"], haFloors: HomeAssistant["floors"], haDevices: HomeAssistant["devices"], haEntities: HomeAssistant["entities"], haStates: HomeAssistant["states"], includeDomains?: string[], excludeDomains?: string[], includeDeviceClasses?: string[], deviceFilter?: HaDevicePickerDeviceFilterFunc, entityFilter?: HaEntityPickerEntityFilterFunc, excludeAreas?: string[], idPrefix?: string) => PickerComboBoxItem[];
export declare const areaComboBoxKeys: FuseWeightedKey[];
