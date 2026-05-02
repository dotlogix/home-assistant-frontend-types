import "@home-assistant/webawesome/dist/components/divider/divider";
import type { CSSResultGroup, TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/trace/ha-trace-blueprint-config";
import "../../../components/trace/ha-trace-config";
import "../../../components/trace/ha-trace-logbook";
import "../../../components/trace/ha-trace-path-details";
import "../../../components/trace/ha-trace-timeline";
import "../../../components/trace/hat-script-graph";
import type { EntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { ScriptEntity } from "../../../data/script";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "../../../components/ha-trace-picker";
export declare class HaScriptTrace extends LitElement {
    hass: HomeAssistant;
    scriptId: string;
    scripts: ScriptEntity[];
    isWide: boolean;
    narrow: boolean;
    route: Route;
    _entityRegistry: EntityRegistryEntry[];
    private _entityId?;
    private _traces?;
    private _runId?;
    private _selected?;
    private _trace?;
    private _logbookEntries?;
    private _view;
    private _graph?;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    willUpdate(changedProps: PropertyValues): void;
    private _pickOlderTrace;
    private _pickNewerTrace;
    private _pickTrace;
    private _pickNode;
    private _refreshTraces;
    private _loadTraces;
    private _loadTrace;
    private _downloadTrace;
    private _importTrace;
    private _loadLocalStorageTrace;
    private _loadLocalTrace;
    private _showTab;
    private _timelinePathPicked;
    private _showInfo;
    private _navigateToScript;
    private _handleDropdownSelect;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-script-trace": HaScriptTrace;
    }
}
