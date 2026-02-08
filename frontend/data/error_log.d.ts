import type { HomeAssistant } from "../types";
import type { HassioAddonInfo } from "./hassio/addon";
export interface LogProvider {
    key: string;
    name: string;
    addon?: HassioAddonInfo;
}
export declare const fetchErrorLog: (hass: HomeAssistant) => Promise<string>;
export declare const getErrorLogDownloadUrl: (hass: HomeAssistant) => "/api/hassio/core/logs/latest" | "/api/error_log";
