import type { HomeAssistant } from "../types";
import type { EntityRegistryEntry } from "./entity/entity_registry";
import type { ActionType, ActionTypes } from "./script";
export declare const describeAction: <T extends ActionType>(hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], action: ActionTypes[T], actionType?: T, ignoreAlias?: boolean) => string;
