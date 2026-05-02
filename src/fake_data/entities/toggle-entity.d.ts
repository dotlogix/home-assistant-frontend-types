import { MockBaseEntity } from "./base-entity";
/**
 * Generic toggle entity used for domains: automation, input_boolean, switch.
 * Handles turn_on, turn_off, and toggle services via homeassistant or own domain.
 */
export declare class MockToggleEntity extends MockBaseEntity {
    handleService(domain: string, service: string, data: Record<string, any>): Promise<void>;
}
