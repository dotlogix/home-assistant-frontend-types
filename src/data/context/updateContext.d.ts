import type { HomeAssistant, HomeAssistantApi, HomeAssistantConfig, HomeAssistantConnection, HomeAssistantInternationalization, HomeAssistantRegistries, HomeAssistantUI } from "../../types";
export declare const updateHassGroups: {
    registries: (hass: HomeAssistant, value?: HomeAssistantRegistries) => HomeAssistantRegistries;
    internationalization: (hass: HomeAssistant, value?: HomeAssistantInternationalization) => HomeAssistantInternationalization;
    api: (hass: HomeAssistant, value?: HomeAssistantApi) => HomeAssistantApi;
    connection: (hass: HomeAssistant, value?: HomeAssistantConnection) => HomeAssistantConnection;
    ui: (hass: HomeAssistant, value?: HomeAssistantUI) => HomeAssistantUI;
    config: (hass: HomeAssistant, value?: HomeAssistantConfig) => HomeAssistantConfig;
};
