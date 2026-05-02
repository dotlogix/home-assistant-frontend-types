import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-base-time-input";
import "./ha-button-toggle-group";
export interface HaDurationData {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}
export declare class HaDurationInput extends LitElement {
    data?: HaDurationData;
    label?: string;
    helper?: string;
    required: boolean;
    enableMillisecond: boolean;
    enableDay: boolean;
    allowNegative: boolean;
    enableSecond: boolean;
    disabled: boolean;
    private _input?;
    private _toggleNegative;
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
    private get _negative();
    private get _days();
    private get _hours();
    private get _minutes();
    private get _seconds();
    private get _milliseconds();
    private _durationChanged;
    private _negativeChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-duration-input": HaDurationInput;
    }
}
