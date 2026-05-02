import { MockBaseEntity } from "./base-entity";
import type { EntityAttributes } from "./types";
export declare class MockCoverEntity extends MockBaseEntity {
    private _positionTimer?;
    handleService(domain: string, service: string, data: Record<string, any>): Promise<void>;
    private _startTransition;
    private _stopTransition;
    protected _getStateAttributes(): EntityAttributes;
}
