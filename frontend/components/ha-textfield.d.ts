import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "./input/ha-input";
/**
 * Legacy wrapper around ha-input that preserves the mwc-textfield API.
 * New code should use ha-input directly.
 * @deprecated Use ha-input instead.
 */
export declare class HaTextField extends LitElement {
    value: string;
    type: "text" | "search" | "tel" | "url" | "email" | "password" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "color";
    label: string;
    placeholder: string;
    prefix: string;
    suffix: string;
    icon: boolean;
    iconTrailing: boolean;
    disabled: boolean;
    required: boolean;
    minLength: number;
    maxLength: number;
    outlined: boolean;
    helper: string;
    validateOnInitialRender: boolean;
    validationMessage: string;
    autoValidate: boolean;
    pattern: string;
    min: number | string;
    max: number | string;
    step: number | "any" | null;
    size: number | null;
    helperPersistent: boolean;
    charCounter: boolean | "external" | "internal";
    endAligned: boolean;
    inputMode: string;
    readOnly: boolean;
    name: string;
    autocapitalize: string;
    invalid: boolean;
    errorMessage?: string;
    autocomplete?: string;
    autocorrect: boolean;
    inputSpellcheck?: string;
    private _haInput?;
    static shadowRootOptions: ShadowRootInit;
    get formElement(): HTMLInputElement | undefined;
    select(): void;
    setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: "forward" | "backward" | "none"): void;
    setRangeText(replacement: string, start?: number, end?: number, selectMode?: "select" | "start" | "end" | "preserve"): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    /** No-op. Preserved for backward compatibility. */
    layout(): void;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _onInput;
    private _onChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-textfield": HaTextField;
    }
}
