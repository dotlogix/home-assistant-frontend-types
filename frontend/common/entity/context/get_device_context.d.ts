import type { AreaRegistryEntry } from "../../../data/area/area_registry";
import type { DeviceRegistryEntry } from "../../../data/device/device_registry";
import type { FloorRegistryEntry } from "../../../data/floor_registry";
import type { HomeAssistant } from "../../../types";
interface DeviceContext {
    device: DeviceRegistryEntry;
    area: AreaRegistryEntry | null;
    floor: FloorRegistryEntry | null;
}
export declare const getDeviceContext: (device: DeviceRegistryEntry, hass: HomeAssistant) => DeviceContext;
export {};
