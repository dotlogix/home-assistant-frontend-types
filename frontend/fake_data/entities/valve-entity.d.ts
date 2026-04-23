import { MockBaseEntity } from "./base-entity";
import type { EntityAttributes } from "./types";
export declare class MockValveEntity extends MockBaseEntity {
    handleService(domain: string, service: string, data: Record<string, any>): Promise<void>;
    protected _getStateAttributes(): EntityAttributes;
}
