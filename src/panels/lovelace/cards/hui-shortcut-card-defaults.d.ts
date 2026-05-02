import type { NavigationPathInfo } from "../../../data/compute-navigation-path-info";
import type { ActionConfig } from "../../../data/lovelace/config/action";
import type { HomeAssistant } from "../../../types";
export declare const getShortcutCardDefaults: (hass: HomeAssistant, action: ActionConfig | undefined, navInfo: NavigationPathInfo) => NavigationPathInfo;
