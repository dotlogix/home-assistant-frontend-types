import type { HomeAssistant } from "../types";
export interface ESPHomeEncryptionKey {
    encryption_key: string;
}
export declare const fetchESPHomeEncryptionKey: (hass: HomeAssistant, entry_id: string) => Promise<ESPHomeEncryptionKey>;
