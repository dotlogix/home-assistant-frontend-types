import type { AreaRegistryEntry } from "../../../data/area/area_registry";
import type { DeviceRegistryEntry } from "../../../data/device/device_registry";
import type { HomeAssistant } from "../../../types";
export declare const getDeviceArea: (device: DeviceRegistryEntry, areas: HomeAssistant["areas"]) => AreaRegistryEntry | undefined;
