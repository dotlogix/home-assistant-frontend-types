import type { HomeAssistant } from "../../types";
import type { Condition } from "../../panels/lovelace/common/validate-condition";
/**
 * Helper to setup media query listeners for conditional visibility
 */
export declare function setupMediaQueryListeners(conditions: Condition[], hass: HomeAssistant, addListener: (unsub: () => void) => void, onUpdate: (conditionsMet: boolean) => void): void;
/**
 * Helper to setup time-based listeners for conditional visibility
 */
export declare function setupTimeListeners(conditions: Condition[], hass: HomeAssistant, addListener: (unsub: () => void) => void, onUpdate: (conditionsMet: boolean) => void): void;
