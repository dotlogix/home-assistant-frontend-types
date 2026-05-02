import type { HassConfig } from "home-assistant-js-websocket";
import type { LineSeriesOption } from "echarts/types/dist/shared";
import type { FrontendLocaleData } from "../../../../../data/translation";
import type { ECOption } from "../../../../../resources/echarts/echarts";
import type { StatisticPeriod } from "../../../../../data/recorder";
export { fillDataGapsAndRoundCaps } from "../../../../../components/chart/round-caps";
/**
 * Energy chart data point tuple:
 * [0] displayX  - bar position (midpoint for sub-daily periods, start otherwise)
 * [1] value     - the energy value
 * [2] originalStart - original period start timestamp, used for tooltips
 */
export type EnergyDataPoint = [
    displayX: number,
    value: number,
    originalStart: number
];
export declare function getSuggestedMax(period: StatisticPeriod, end: Date, noRounding: boolean): Date;
export declare function getCommonOptions(start: Date, end: Date, locale: FrontendLocaleData, config: HassConfig, unit?: string, compareStart?: Date, compareEnd?: Date, formatTotal?: (total: number) => string, detailedDailyData?: boolean): ECOption;
export declare function fillLineGaps(datasets: LineSeriesOption[]): LineSeriesOption[];
/**
 * Compute the display x-position for an energy bar chart data point.
 * For sub-daily periods (hour/5minute), returns the midpoint to center bars
 * between ticks. For daily or longer periods, returns the start timestamp.
 */
export declare function computeStatMidpoint(start: number, end: number, period: string, compareTransform?: (ts: Date) => Date): number;
export declare function getCompareTransform(start: Date, compareStart?: Date): (ts: Date) => Date;
