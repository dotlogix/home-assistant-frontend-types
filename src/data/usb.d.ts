import type { HomeAssistant } from "../types";
export interface SerialPort {
    device: string;
    serial_number: string | null;
    manufacturer: string | null;
    description: string | null;
    interface_description?: string | null;
    vid?: string;
    pid?: string;
    matching_integrations: string[];
}
export declare const scanUSBDevices: (hass: HomeAssistant) => Promise<unknown>;
export declare const listSerialPorts: (hass: HomeAssistant) => Promise<SerialPort[]>;
