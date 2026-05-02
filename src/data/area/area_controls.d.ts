import type { HomeAssistant } from "../../types";
export type AreaControlDomain = "light" | "fan" | "switch" | "cover-shutter" | "cover-blind" | "cover-curtain" | "cover-shade" | "cover-awning" | "cover-garage" | "cover-gate" | "cover-door" | "cover-window" | "cover-damper";
export interface AreaControlsButton {
    filter: {
        domain: string;
        device_class?: string | string[];
    };
}
export declare const AREA_CONTROLS_BUTTONS: Record<AreaControlDomain, AreaControlsButton>;
export declare const getAreaControlEntities: (controls: AreaControlDomain[], areaId: string, excludeEntities: string[] | undefined, hass: HomeAssistant) => Record<AreaControlDomain, string[]>;
export declare const MAX_DEFAULT_AREA_CONTROLS = 4;
