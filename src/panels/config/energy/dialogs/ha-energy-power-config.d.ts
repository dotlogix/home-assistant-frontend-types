import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-formfield";
import "../../../../components/ha-radio";
import type { PowerConfig } from "../../../../data/energy";
import type { HomeAssistant } from "../../../../types";
export type PowerType = "none" | "standard" | "inverted" | "two_sensors";
/**
 * Extracts the power type from a PowerConfig object.
 */
export declare function getPowerTypeFromConfig(powerConfig?: PowerConfig, statRate?: string): PowerType;
/**
 * Creates an initial PowerConfig from existing config or legacy stat_rate.
 */
export declare function getInitialPowerConfig(powerConfig?: PowerConfig, statRate?: string): PowerConfig;
/**
 * Builds an exclude list for power statistics from existing sources.
 */
export declare function buildPowerExcludeList(sources: {
    stat_rate?: string;
    power_config?: PowerConfig;
}[], currentPowerConfig: PowerConfig, currentStatRate?: string): string[];
declare global {
    interface HASSDomEvents {
        "power-config-changed": {
            powerType: PowerType;
            powerConfig: PowerConfig;
        };
    }
}
export declare class HaEnergyPowerConfig extends LitElement {
    hass: HomeAssistant;
    powerType: PowerType;
    powerConfig: PowerConfig;
    excludeList?: string[];
    /**
     * Base key for localization lookups.
     * Should include keys for: sensor_type, type_none, type_standard, type_inverted,
     * type_two_sensors, power, power_helper, type_inverted_description, power_from, power_to
     */
    localizeBaseKey: string;
    private _powerUnits?;
    protected willUpdate(changedProps: PropertyValues<this>): Promise<void>;
    protected render(): TemplateResult;
    private _handlePowerTypeChanged;
    private _standardPowerChanged;
    private _invertedPowerChanged;
    private _fromPowerChanged;
    private _toPowerChanged;
    /**
     * Validates that the power config is complete for the selected type.
     */
    isValid(): boolean;
    static readonly styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-energy-power-config": HaEnergyPowerConfig;
    }
}
