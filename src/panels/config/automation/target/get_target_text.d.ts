import type { LabelRegistryEntry } from "../../../../data/label/label_registry";
import type { HomeAssistant } from "../../../../types";
export declare const getTargetText: (hass: HomeAssistant, targetType: "floor" | "area" | "device" | "entity" | "label", targetId: string, getLabel?: (id: string) => LabelRegistryEntry | undefined) => string;
