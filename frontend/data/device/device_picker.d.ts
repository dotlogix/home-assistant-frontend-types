import type { HaDevicePickerDeviceFilterFunc } from "../../components/device/ha-device-picker";
import type { PickerComboBoxItem } from "../../components/ha-picker-combo-box";
import type { FuseWeightedKey } from "../../resources/fuseMultiTerm";
import type { HomeAssistant } from "../../types";
import type { ConfigEntry } from "../config_entries";
import type { HaEntityPickerEntityFilterFunc } from "../entity/entity";
export interface DevicePickerItem extends PickerComboBoxItem {
    domain?: string;
    domain_name?: string;
}
export declare const deviceComboBoxKeys: FuseWeightedKey[];
export declare const getDevices: (hass: HomeAssistant, configEntryLookup: Record<string, ConfigEntry>, includeDomains?: string[], excludeDomains?: string[], includeDeviceClasses?: string[], deviceFilter?: HaDevicePickerDeviceFilterFunc, entityFilter?: HaEntityPickerEntityFilterFunc, excludeDevices?: string[], value?: string, idPrefix?: string) => DevicePickerItem[];
