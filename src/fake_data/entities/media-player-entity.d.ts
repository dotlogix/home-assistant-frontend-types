import type { EntityAttributes } from "./types";
import { MockBaseEntity } from "./base-entity";
export declare class MockMediaPlayerEntity extends MockBaseEntity {
    static CAPABILITY_ATTRIBUTES: Set<string>;
    protected _getCapabilityAttributes(): EntityAttributes;
    protected _getStateAttributes(): EntityAttributes;
    handleService(domain: string, service: string, data: Record<string, any>): Promise<void>;
}
