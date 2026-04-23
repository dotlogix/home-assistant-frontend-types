import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-checkbox";
import "../../../../../components/ha-selector/ha-selector";
import "../../../../../components/ha-settings-row";
import type { PlatformCondition } from "../../../../../data/automation";
import { type ConditionDescription } from "../../../../../data/condition";
import type { HomeAssistant } from "../../../../../types";
export declare class HaPlatformCondition extends LitElement {
    hass: HomeAssistant;
    condition: PlatformCondition;
    description?: ConditionDescription;
    disabled: boolean;
    private _checkedKeys;
    private _manifest?;
    private _resolvedTargetEntityCount?;
    static get defaultConfig(): PlatformCondition;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _targetSelector;
    private _renderField;
    private _generateContext;
    private _dataChanged;
    private _targetChanged;
    private _checkboxChanged;
    private _localizeValueCallback;
    private _fetchManifest;
    private _resolveTargetEntityCount;
    private _updateResolvedTargetEntityCount;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-platform": HaPlatformCondition;
    }
}
