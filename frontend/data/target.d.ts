import type { HassServiceTarget } from "home-assistant-js-websocket";
import type { HaDevicePickerDeviceFilterFunc } from "../components/device/ha-device-picker";
import type { PickerComboBoxItem } from "../components/ha-picker-combo-box";
import type { HomeAssistant } from "../types";
import type { AreaRegistryEntry } from "./area/area_registry";
import type { FloorComboBoxItem } from "./area_floor_picker";
import type { DevicePickerItem } from "./device/device_picker";
import type { DeviceRegistryEntry } from "./device/device_registry";
import type { HaEntityPickerEntityFilterFunc } from "./entity/entity";
import type { EntityComboBoxItem } from "./entity/entity_picker";
import type { EntityRegistryDisplayEntry } from "./entity/entity_registry";
export declare const TARGET_SEPARATOR = "________";
export type TargetType = "entity" | "device" | "area" | "label" | "floor";
export type TargetTypeFloorless = Exclude<TargetType, "floor">;
export interface TargetItem {
    type: TargetType;
    id: string;
}
export interface SingleHassServiceTarget {
    entity_id?: string;
    device_id?: string;
    area_id?: string;
    floor_id?: string;
    label_id?: string;
}
export interface ExtractFromTargetResult {
    missing_areas: string[];
    missing_devices: string[];
    missing_floors: string[];
    missing_labels: string[];
    referenced_areas: string[];
    referenced_devices: string[];
    referenced_entities: string[];
}
export interface ExtractFromTargetResultReferenced {
    referenced_areas: string[];
    referenced_devices: string[];
    referenced_entities: string[];
}
export declare const extractFromTarget: (hass: HomeAssistant, target: HassServiceTarget, expandGroup?: boolean) => Promise<ExtractFromTargetResult>;
export declare const getResolvedTargetEntityCount: (hass: HomeAssistant, target?: HassServiceTarget) => Promise<number | undefined>;
export declare const getTriggersForTarget: (callWS: HomeAssistant["callWS"], target: HassServiceTarget, expandGroup?: boolean) => Promise<string[]>;
export declare const getConditionsForTarget: (callWS: HomeAssistant["callWS"], target: HassServiceTarget, expandGroup?: boolean) => Promise<string[]>;
export declare const getServicesForTarget: (callWS: HomeAssistant["callWS"], target: HassServiceTarget, expandGroup?: boolean) => Promise<string[]>;
export declare const areaMeetsFilter: (area: AreaRegistryEntry, devices: HomeAssistant["devices"], entities: HomeAssistant["entities"], deviceFilter?: HaDevicePickerDeviceFilterFunc, includeDomains?: string[], includeDeviceClasses?: string[], states?: HomeAssistant["states"], entityFilter?: HaEntityPickerEntityFilterFunc) => boolean;
export declare const deviceMeetsFilter: (device: DeviceRegistryEntry, entities: HomeAssistant["entities"], deviceFilter?: HaDevicePickerDeviceFilterFunc, includeDomains?: string[], includeDeviceClasses?: string[], states?: HomeAssistant["states"], entityFilter?: HaEntityPickerEntityFilterFunc) => boolean;
export declare const entityRegMeetsFilter: (entity: EntityRegistryDisplayEntry, includeSecondary?: boolean, includeDomains?: string[], includeDeviceClasses?: string[], states?: HomeAssistant["states"], entityFilter?: HaEntityPickerEntityFilterFunc) => boolean;
export declare const getTargetComboBoxItemType: (item: PickerComboBoxItem | (FloorComboBoxItem & {
    last?: boolean | undefined;
}) | EntityComboBoxItem | DevicePickerItem) => "device" | "area" | "floor" | "entity" | "label" | "empty";
