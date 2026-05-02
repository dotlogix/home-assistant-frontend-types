import { MockBaseEntity } from "./base-entity";
export declare class MockGroupEntity extends MockBaseEntity {
    handleService(domain: string, service: string, data: Record<string, any>): Promise<void>;
}
