import { LitElement, nothing } from "lit";
import "../../../components/ha-assist-pipeline-picker";
import "../../../components/ha-help-tooltip";
import "../../../components/ha-navigation-picker";
import "../../../components/ha-service-control";
import type { ActionConfig } from "../../../data/lovelace/config/action";
import type { HomeAssistant } from "../../../types";
export type UiAction = Exclude<ActionConfig["action"], "fire-dom-event">;
export interface ActionRelatedContext {
    entity_id?: string;
    area_id?: string;
}
export declare const ACTION_RELATED_CONTEXT: {
    readonly entity_id: "entity";
    readonly area_id: "area";
};
export declare const supportedActions: (struct: any, supported_actions: UiAction[]) => import("superstruct").Struct<any, unknown>;
export declare class HuiActionEditor extends LitElement {
    config?: ActionConfig;
    label?: string;
    actions?: UiAction[];
    defaultAction?: UiAction;
    tooltipText?: string;
    hass?: HomeAssistant;
    context?: ActionRelatedContext;
    get _navigation_path(): string;
    get _url_path(): string;
    get _service(): string;
    private _serviceAction;
    private _navigateSchema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _actionPicked;
    private _valueChanged;
    private _formValueChanged;
    private _computeFormLabel;
    private _serviceValueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-action-editor": HuiActionEditor;
    }
}
