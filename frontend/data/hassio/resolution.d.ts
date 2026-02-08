import type { HomeAssistant, TranslationDict } from "../../types";
export interface HassioResolution {
    unsupported: (keyof TranslationDict["ui"]["dialogs"]["unsupported"]["reasons"])[];
    unhealthy: (keyof TranslationDict["ui"]["dialogs"]["unhealthy"]["reasons"])[];
    issues: string[];
    suggestions: string[];
}
export declare const fetchHassioResolution: (hass: HomeAssistant) => Promise<HassioResolution>;
