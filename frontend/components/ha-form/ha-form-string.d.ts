import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../../common/translations/localize";
import "../ha-icon-button";
import "../input/ha-input";
import type { HaFormElement, HaFormStringData, HaFormStringSchema } from "./types";
export declare class HaFormString extends LitElement implements HaFormElement {
    localize?: LocalizeFunc;
    localizeBaseKey: string;
    schema: HaFormStringSchema;
    data: HaFormStringData;
    label: string;
    helper?: string;
    disabled: boolean;
    private _input?;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    reportValidity(): boolean;
    protected render(): TemplateResult;
    protected updated(changedProps: PropertyValues): void;
    protected _valueChanged(ev: Event): void;
    protected get stringType(): "email" | "url" | "text";
    protected get isPassword(): boolean;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-string": HaFormString;
    }
}
