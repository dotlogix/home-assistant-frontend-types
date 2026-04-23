import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "./ha-form";
import type { HaFormDataContainer, HaFormElement, HaFormGridSchema, HaFormSchema } from "./types";
export declare class HaFormGrid extends LitElement implements HaFormElement {
    hass: HomeAssistant;
    data: HaFormDataContainer;
    schema: HaFormGridSchema;
    disabled: boolean;
    computeLabel?: (schema: HaFormSchema, data?: HaFormDataContainer) => string;
    computeHelper?: (schema: HaFormSchema) => string;
    localizeValue?: (key: string) => string;
    private _forms?;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    reportValidity(): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-grid": HaFormGrid;
    }
}
