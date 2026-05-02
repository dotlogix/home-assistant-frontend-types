import type { HassEntity } from "home-assistant-js-websocket";
import type { EntityAttributes, EntityInput, MockHassLike } from "./types";
export declare const BASE_CAPABILITY_ATTRIBUTES: Set<string>;
export declare class MockBaseEntity {
    entityId: string;
    domain: string;
    objectId: string;
    state: string;
    baseAttributes: EntityAttributes;
    attributes: EntityAttributes;
    lastChanged: string;
    lastUpdated: string;
    hass?: MockHassLike;
    private _transitionTimer?;
    static CAPABILITY_ATTRIBUTES: Set<string>;
    constructor(input: EntityInput);
    handleService(domain: string, service: string, data: Record<string, any>): Promise<void>;
    protected _transition(transitioning: string, final: string, duration: number, onComplete?: () => void): void;
    protected _clearTransition(): void;
    update(changes: {
        state?: string;
        attributes?: EntityAttributes;
    }): void;
    protected _getBaseAttributes(): EntityAttributes;
    protected _getCapabilityAttributes(): EntityAttributes;
    protected _getStateAttributes(): EntityAttributes;
    toState(): HassEntity;
}
