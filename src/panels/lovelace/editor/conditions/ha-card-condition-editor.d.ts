import "@home-assistant/webawesome/dist/components/divider/divider";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-card";
import "../../../../components/ha-dropdown";
import "../../../../components/ha-dropdown-item";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-yaml-editor";
import type { HomeAssistant } from "../../../../types";
import type { Condition, LegacyCondition } from "../../common/validate-condition";
export declare const getConditionClassName: (condition: string, noEntity: boolean) => string;
export declare class HaCardConditionEditor extends LitElement {
    hass: HomeAssistant;
    condition: Condition | LegacyCondition;
    private _entityContext?;
    private get _noEntity();
    protected _clipboard?: Condition | LegacyCondition;
    _yamlMode: boolean;
    _uiAvailable: boolean;
    _uiWarnings: string[];
    _condition?: Condition;
    private _testingResult?;
    private get _editor();
    expand(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    private _timeout?;
    private _testCondition;
    private _duplicateCondition;
    private _copyCondition;
    private _cutCondition;
    private _delete;
    private _onYamlChange;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-editor": HaCardConditionEditor;
    }
    interface HASSDomEvents {
        "duplicate-condition": {
            value: Condition | LegacyCondition;
        };
    }
}
