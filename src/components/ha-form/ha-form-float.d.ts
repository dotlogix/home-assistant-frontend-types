import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../../common/translations/localize";
import "../input/ha-input";
import type { HaFormElement, HaFormFloatData, HaFormFloatSchema } from "./types";
export declare class HaFormFloat extends LitElement implements HaFormElement {
    localize?: LocalizeFunc;
    schema: HaFormFloatSchema;
    data: HaFormFloatData;
    label?: string;
    helper?: string;
    disabled: boolean;
    private _input?;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry | null;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    reportValidity(): boolean;
    protected render(): TemplateResult;
    protected updated(changedProps: PropertyValues<this>): void;
    private _handleInput;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-float": HaFormFloat;
    }
}
