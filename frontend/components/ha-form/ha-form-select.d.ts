import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-selector/ha-selector-select";
import type { HaFormElement, HaFormSelectData, HaFormSelectSchema } from "./types";
export declare class HaFormSelect extends LitElement implements HaFormElement {
    hass: HomeAssistant;
    schema: HaFormSelectSchema;
    data: HaFormSelectData;
    label?: string;
    helper?: string;
    localizeValue?: (key: string) => string;
    disabled: boolean;
    private _selectSchema;
    reportValidity(): boolean;
    protected render(): TemplateResult;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-select": HaFormSelect;
    }
}
