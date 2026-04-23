import type { BatterySourceTypeEnergyPreference, DeviceConsumptionEnergyPreference, EnergyGasUnitClass, EnergyInfo, GasSourceTypeEnergyPreference, GridSourceTypeEnergyPreference, SolarSourceTypeEnergyPreference, WaterSourceTypeEnergyPreference } from "../../../../data/energy";
import type { StatisticsMetaData } from "../../../../data/recorder";
export interface EnergySettingsGridDialogParams {
    source?: GridSourceTypeEnergyPreference;
    grid_sources: GridSourceTypeEnergyPreference[];
    saveCallback: (source: GridSourceTypeEnergyPreference) => Promise<void>;
}
export interface EnergySettingsSolarDialogParams {
    info: EnergyInfo;
    source?: SolarSourceTypeEnergyPreference;
    solar_sources: SolarSourceTypeEnergyPreference[];
    saveCallback: (source: SolarSourceTypeEnergyPreference) => Promise<void>;
}
export interface EnergySettingsBatteryDialogParams {
    source?: BatterySourceTypeEnergyPreference;
    battery_sources: BatterySourceTypeEnergyPreference[];
    saveCallback: (source: BatterySourceTypeEnergyPreference) => Promise<void>;
}
export interface EnergySettingsGasDialogParams {
    source?: GasSourceTypeEnergyPreference;
    allowedGasUnitClass?: EnergyGasUnitClass;
    metadata?: StatisticsMetaData;
    gas_sources: GasSourceTypeEnergyPreference[];
    saveCallback: (source: GasSourceTypeEnergyPreference) => Promise<void>;
}
export interface EnergySettingsWaterDialogParams {
    source?: WaterSourceTypeEnergyPreference;
    metadata?: StatisticsMetaData;
    water_sources: WaterSourceTypeEnergyPreference[];
    saveCallback: (source: WaterSourceTypeEnergyPreference) => Promise<void>;
}
export interface EnergySettingsDeviceDialogParams {
    device?: DeviceConsumptionEnergyPreference;
    device_consumptions: DeviceConsumptionEnergyPreference[];
    statsMetadata?: Record<string, StatisticsMetaData>;
    saveCallback: (device: DeviceConsumptionEnergyPreference) => Promise<void>;
}
export interface EnergySettingsDeviceWaterDialogParams {
    device?: DeviceConsumptionEnergyPreference;
    device_consumptions: DeviceConsumptionEnergyPreference[];
    statsMetadata?: Record<string, StatisticsMetaData>;
    saveCallback: (device: DeviceConsumptionEnergyPreference) => Promise<void>;
}
export declare const showEnergySettingsDeviceDialog: (element: HTMLElement, dialogParams: EnergySettingsDeviceDialogParams) => void;
export declare const showEnergySettingsBatteryDialog: (element: HTMLElement, dialogParams: EnergySettingsBatteryDialogParams) => void;
export declare const showEnergySettingsSolarDialog: (element: HTMLElement, dialogParams: EnergySettingsSolarDialogParams) => void;
export declare const showEnergySettingsGasDialog: (element: HTMLElement, dialogParams: EnergySettingsGasDialogParams) => void;
export declare const showEnergySettingsWaterDialog: (element: HTMLElement, dialogParams: EnergySettingsWaterDialogParams) => void;
export declare const showEnergySettingsDeviceWaterDialog: (element: HTMLElement, dialogParams: EnergySettingsDeviceWaterDialogParams) => void;
export declare const showEnergySettingsGridDialog: (element: HTMLElement, dialogParams: EnergySettingsGridDialogParams) => void;
