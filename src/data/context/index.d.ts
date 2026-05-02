import type { HassConfig } from "home-assistant-js-websocket";
import type { HomeAssistantApi, HomeAssistantConfig, HomeAssistantConnection, HomeAssistantInternationalization, HomeAssistantRegistries, HomeAssistantUI } from "../../types";
import type { ConfigEntry } from "../config_entries";
import type { EntityRegistryEntry } from "../entity/entity_registry";
import type { DomainManifestLookup } from "../integration";
import type { LabelRegistryEntry } from "../label/label_registry";
/**
 * Entity, device, area, and floor registries
 */
export declare const registriesContext: {
    __context__: HomeAssistantRegistries;
};
/**
 * Live map of all entity states, keyed by entity ID.
 */
export declare const statesContext: {
    __context__: import("home-assistant-js-websocket").HassEntities;
};
/**
 * Provides the map of all available Home Assistant services, keyed by domain.
 */
export declare const servicesContext: {
    __context__: import("home-assistant-js-websocket").HassServices;
};
/**
 * i18n state: active language, locale settings, the `localize` function, translation metadata, and the
 * `loadBackendTranslation` / `loadFragmentTranslation` loaders.
 */
export declare const internationalizationContext: {
    __context__: HomeAssistantInternationalization;
};
/**
 * HTTP and WebSocket API surface: `callService`, `callApi`,
 * `callApiRaw`, `callWS`, `sendWS`, `fetchWithAuth`, and `hassUrl`.
 */
export declare const apiContext: {
    __context__: HomeAssistantApi;
};
/**
 * WebSocket connection state: `connection`, `connected`, and `debugConnection`.
 */
export declare const connectionContext: {
    __context__: HomeAssistantConnection;
};
/**
 * UI preferences and global UI state: themes, selected theme,
 * panels, sidebar mode, kiosk mode, shortcuts, vibration, and
 * `suspendWhenHidden`.
 */
export declare const uiContext: {
    __context__: HomeAssistantUI;
};
/**
 * HA core configuration together with user session data:
 * `auth`, `config` (core HA config), `user`, `userData`, and `systemData`.
 */
export declare const configContext: {
    __context__: HomeAssistantConfig;
};
/**
 * Map of all entities in the entity registry, keyed by entity ID.
 */
export declare const entitiesContext: {
    __context__: Record<string, import("../entity/entity_registry").EntityRegistryDisplayEntry>;
};
/**
 * Map of all devices in the device registry, keyed by device ID.
 */
export declare const devicesContext: {
    __context__: Record<string, import("../device/device_registry").DeviceRegistryEntry>;
};
/**
 * Map of all areas in the area registry, keyed by area ID.
 */
export declare const areasContext: {
    __context__: Record<string, import("../area/area_registry").AreaRegistryEntry>;
};
/**
 * Map of all floors in the floor registry, keyed by floor ID.
 */
export declare const floorsContext: {
    __context__: Record<string, import("../floor_registry").FloorRegistryEntry>;
};
/**
 * Lazy contexts are not subscribed to by default. They are only subscribed to when a provider is consumed with at least one consumer.
 */
/**
 * Lazy loaded labels registry, keyed by label ID.
 */
export declare const labelsContext: {
    __context__: LabelRegistryEntry[];
};
/**
 * Lazy loaded entity registry array
 */
export declare const fullEntitiesContext: {
    __context__: EntityRegistryEntry[];
};
/**
 * Lazy loaded config entries array
 */
export declare const configEntriesContext: {
    __context__: ConfigEntry[];
};
/**
 * Lazy loaded integration manifests, keyed by domain.
 */
export declare const manifestsContext: {
    __context__: DomainManifestLookup;
};
/** @deprecated Use `connectionContext` instead. */
export declare const connectionSingleContext: {
    __context__: import("home-assistant-js-websocket").Connection;
};
/** @deprecated Use `internationalizationContext` instead. */
export declare const localizeContext: {
    __context__: import("../../common/translations/localize").LocalizeFunc;
};
/** @deprecated Use `internationalizationContext` instead. */
export declare const localeContext: {
    __context__: import("../translation").FrontendLocaleData;
};
/** @deprecated Use `configContext` instead. */
export declare const configSingleContext: {
    __context__: HassConfig;
};
/** @deprecated Use `uiContext` instead. */
export declare const themesContext: {
    __context__: import("../ws-themes").Themes;
};
/** @deprecated Use `uiContext` instead. */
export declare const selectedThemeContext: {
    __context__: import("../../types").ThemeSettings;
};
/** @deprecated Use `configContext` instead. */
export declare const userContext: {
    __context__: import("../../types").CurrentUser;
};
/** @deprecated Use `configContext` instead. */
export declare const userDataContext: {
    __context__: import("../frontend").CoreFrontendUserData;
};
/** @deprecated Use `uiContext` instead. */
export declare const panelsContext: {
    __context__: import("../../types").Panels;
};
/** @deprecated Use `configContext` instead. */
export declare const authContext: {
    __context__: import("home-assistant-js-websocket").Auth & {
        external?: import("../../external_app/external_messaging").ExternalMessaging;
    };
};
