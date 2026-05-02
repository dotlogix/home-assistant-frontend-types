import { type Connection } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../../types";
export declare const createHassioSession: (hass: HomeAssistant) => Promise<string>;
export interface IngressPanelInfo {
    title: string;
    icon: string;
}
export type IngressPanelInfoMap = Record<string, IngressPanelInfo>;
export declare const getIngressPanelInfoCollection: (conn: Connection) => import("home-assistant-js-websocket").Collection<IngressPanelInfoMap>;
export declare const validateHassioSession: (hass: HomeAssistant, session: string) => Promise<void>;
