interface ConsumeEntryConfig {
    entityIdPath: readonly string[];
}
/**
 * Consumes `statesContext` and narrows it to the `HassEntity` for the entity
 * ID found at `entityIdPath` on the host (e.g. `["_config", "entity"]`).
 *
 * The first path segment is watched on the host — changes to it re-run the
 * lookup. Deeper segments are traversed at lookup time and short-circuit on
 * nullish values.
 */
export declare const consumeEntityState: (config: ConsumeEntryConfig) => (proto: any, propertyKey: string) => void;
/**
 * Like {@link consumeEntityState} but for an array of entity IDs at
 * `entityIdPath`. Resolves to a `HassEntity[]` containing one entry per
 * currently-available entity (missing entities and non-string IDs are
 * filtered out; original order is preserved).
 */
export declare const consumeEntityStates: (config: ConsumeEntryConfig) => (proto: any, propertyKey: string) => void;
/**
 * Consumes `entitiesContext` and narrows it to the
 * `EntityRegistryDisplayEntry` for the entity ID found at `entityIdPath` on
 * the host. See {@link consumeEntityState} for semantics.
 */
export declare const consumeEntityRegistryEntry: (config: ConsumeEntryConfig) => (proto: any, propertyKey: string) => void;
export {};
