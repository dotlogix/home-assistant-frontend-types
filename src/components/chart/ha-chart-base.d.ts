import type { EChartsType } from "echarts/core";
import type { ECElementEvent } from "echarts/types/dist/shared";
import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { ECOption } from "../../resources/echarts/echarts";
import type { HomeAssistant } from "../../types";
import "../chips/ha-assist-chip";
import "../ha-icon-button";
export declare const MIN_TIME_BETWEEN_UPDATES: number;
export type CustomLegendOption = ECOption["legend"] & {
    type: "custom";
    data?: {
        id?: string;
        secondaryIds?: string[];
        name: string;
        value?: string;
        itemStyle?: Record<string, any>;
        noLabelClick?: boolean;
    }[];
};
export declare class HaChartBase extends LitElement {
    chart?: EChartsType;
    hass: HomeAssistant;
    data: ECOption["series"];
    options?: ECOption;
    height?: string;
    expandLegend?: boolean;
    smallControls?: boolean;
    hideResetButton?: boolean;
    extraComponents?: any[];
    private _themes;
    clickLabelForMoreInfo: boolean;
    private _isZoomed;
    private _zoomRatio;
    private _minutesDifference;
    private _hiddenDatasets;
    private _modifierPressed;
    private _isTouchDevice;
    private _lastTapTime?;
    private _longPressTimer?;
    private _longPressTriggered;
    private _shouldResizeChart;
    private _resizeAnimationDuration?;
    private _suspendResize;
    private _layoutTransitionActive;
    private _resizeController;
    private _loading;
    private _reducedMotion;
    private _listeners;
    private _originalZrFlush?;
    private _pendingSetup;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getLegendItems;
    private _renderLegend;
    private _formatTimeLabel;
    private _setupChart;
    private _getAllIdsFromLegend;
    private _updateHiddenStatsFromOptions;
    private _getDataZoomConfig;
    private _getDataZoomFilterMode;
    private _createOptions;
    private _createTheme;
    private _getSeries;
    private _getDefaultHeight;
    private _setChartOptions;
    private _handleClickZoom;
    zoom(start: number, end: number, silent?: boolean): void;
    private _handleZoomReset;
    private _updateSankeyRoam;
    private _handleDataZoomEvent;
    private _legendPointerDown;
    private _legendPointerCancel;
    private _legendContextMenu;
    private _toggleDataset;
    private _labelClick;
    private _handleDatasetToggle;
    private _soloLegend;
    private _getAllLegendIds;
    private _toggleExpandedLegend;
    private _handleChartRenderFinished;
    private _resizeChartIfNeeded;
    private _compareCustomLegendOptions;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-chart-base": HaChartBase;
    }
    interface HASSDomEvents {
        "dataset-hidden": {
            id: string;
        };
        "dataset-unhidden": {
            id: string;
        };
        "chart-click": ECElementEvent;
        "legend-label-click": {
            id: string;
        };
        "chart-zoom": {
            start: number;
            end: number;
        };
        "chart-sankeyroam": {
            zoom: number;
        };
    }
}
