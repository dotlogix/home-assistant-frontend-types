import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import type { Segment } from "../data/vacuum";
import type { HomeAssistant } from "../types";
import "./ha-alert";
import "./ha-area-picker";
import "./ha-svg-icon";
type AreaSegmentMapping = Record<string, string[]>;
export declare class HaVacuumSegmentAreaMapper extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    value?: AreaSegmentMapping;
    private _segments?;
    private _loading;
    private _error?;
    get lastSeenSegments(): Segment[];
    protected willUpdate(changedProps: PropertyValues): void;
    private _loadSegments;
    protected render(): import("lit-html").TemplateResult<1>;
    private _groupSegments;
    private _renderSegment;
    private _handleAreaChanged;
    private _getSegmentAreas;
    private _areaChanged;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-vacuum-segment-area-mapper": HaVacuumSegmentAreaMapper;
    }
}
export {};
