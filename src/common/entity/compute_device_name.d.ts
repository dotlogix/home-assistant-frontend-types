import type { DeviceRegistryEntry } from "../../data/device/device_registry";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry } from "../../data/entity/entity_registry";
import type { HomeAssistant } from "../../types";
export declare const computeDeviceName: (device: DeviceRegistryEntry) => string | undefined;
export declare const computeDeviceNameDisplay: (device: DeviceRegistryEntry, localize: HomeAssistant["localize"], hassStates: HomeAssistant["states"], entities?: EntityRegistryEntry[] | EntityRegistryDisplayEntry[] | string[]) => string;
export declare const fallbackDeviceName: (hassStates: HomeAssistant["states"], entities: EntityRegistryEntry[] | EntityRegistryDisplayEntry[] | string[]) => string;
export declare const getDuplicatedDeviceNames: import("memoize-one").MemoizedFn<(devices: HomeAssistant["devices"]) => Set<string>>;
