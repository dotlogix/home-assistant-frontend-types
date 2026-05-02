import type { HomeAssistant } from "../types";
import type { AutomationElementGroupCollection, Trigger, TriggerList } from "./automation";
import type { Selector, TargetSelector } from "./selector";
export declare const TRIGGER_COLLECTIONS: AutomationElementGroupCollection[];
export declare const isTriggerList: (trigger: Trigger) => trigger is TriggerList;
export interface TriggerDescription {
    target?: TargetSelector["target"];
    fields: Record<string, {
        example?: string | boolean | number;
        default?: unknown;
        required?: boolean;
        selector?: Selector;
        context?: Record<string, string>;
    }>;
}
export type TriggerDescriptions = Record<string, TriggerDescription>;
export declare const subscribeTriggers: (hass: HomeAssistant, callback: (triggers: TriggerDescriptions) => void) => Promise<() => Promise<void>>;
export declare const getTriggerDomain: (trigger: string) => string;
export declare const getTriggerObjectId: (trigger: string) => string;
