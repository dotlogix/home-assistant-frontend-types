import type { ReactiveController, ReactiveControllerHost } from "lit";
import { type NavigationPathInfo } from "./compute-navigation-path-info";
import type { HomeAssistant } from "../types";
/**
 * Reactive controller that keeps `NavigationPathInfo` in sync with a
 * navigation path. Resolves synchronously first, then subscribes to
 * lovelace config updates for view paths.
 */
export declare class NavigationPathInfoController implements ReactiveController {
    private _host;
    private _hass?;
    private _info;
    private _unsub?;
    private _subscribedPath?;
    constructor(host: ReactiveControllerHost);
    get info(): NavigationPathInfo;
    update(hass: HomeAssistant, path: string | undefined): void;
    hostConnected(): void;
    hostDisconnected(): void;
}
