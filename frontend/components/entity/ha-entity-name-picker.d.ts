import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { EntityNameItem } from "../../common/entity/compute_entity_name_display";
import type { HomeAssistant } from "../../types";
import "../chips/ha-assist-chip";
import "../chips/ha-chip-set";
import "../chips/ha-input-chip";
import "../ha-button-toggle-group";
import "../ha-combo-box-item";
import "../ha-generic-picker";
import "../ha-input-helper-text";
import "../ha-sortable";
import "../input/ha-input";
export declare class HaEntityNamePicker extends LitElement {
    hass: HomeAssistant;
    entityId?: string;
    value?: string | EntityNameItem | EntityNameItem[];
    label?: string;
    helper?: string;
    required: boolean;
    disabled: boolean;
    private _mode?;
    private _picker?;
    private _editIndex?;
    connectedCallback(): void;
    protected willUpdate(_changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderTextInput;
    private _renderPicker;
    private _modeChanged;
    private _textInputChanged;
    private _addItem;
    private _editItem;
    private _moveItem;
    private _removeItem;
    private _pickerValueChanged;
    private _setValue;
    private get _items();
    private _toItems;
    private _toValue;
    private _formatItem;
    private _validTypes;
    private _getItems;
    private _customNameOption;
    private _getPickerValue;
    private _getFilteredItems;
    private _searchFn;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-name-picker": HaEntityNamePicker;
    }
}
