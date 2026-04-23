import "@home-assistant/webawesome/dist/components/animation/animation";
import "@home-assistant/webawesome/dist/components/input/input";
import { LitElement, type PropertyValues, type TemplateResult, nothing } from "lit";
import "../ha-icon-button";
import "../ha-svg-icon";
import "../ha-tooltip";
export type InputType = "date" | "datetime-local" | "email" | "number" | "password" | "search" | "tel" | "text" | "time" | "color" | "url";
/**
 * Home Assistant input component
 *
 * @element ha-input
 * @extends {LitElement}
 *
 * @summary
 * A text input component supporting Home Assistant theming and validation, based on webawesome input.
 * Supports multiple input types including text, number, password, email, search, and more.
 *
 * @slot start - Content placed before the input (usually for icons or prefixes).
 * @slot end - Content placed after the input (usually for icons or suffixes).
 * @slot label - Custom label content. Overrides the `label` property.
 * @slot hint - Custom hint content. Overrides the `hint` property.
 * @slot clear-icon - Custom clear icon. Defaults to a close icon button.
 * @slot show-password-icon - Custom show password icon. Defaults to an eye icon button.
 * @slot hide-password-icon - Custom hide password icon. Defaults to an eye-off icon button.
 *
 * @csspart wa-base - The underlying wa-input base wrapper.
 * @csspart wa-hint - The underlying wa-input hint container.
 * @csspart wa-input - The underlying wa-input input element.
 *
 * @cssprop --ha-input-padding-top - Padding above the input.
 * @cssprop --ha-input-padding-bottom - Padding below the input. Defaults to `var(--ha-space-2)`.
 * @cssprop --ha-input-text-align - Text alignment of the input. Defaults to `start`.
 * @cssprop --ha-input-required-marker - The marker shown after the label for required fields. Defaults to `"*"`.
 *
 * @attr {("material"|"outlined")} appearance - Sets the input appearance style. "material" is the default filled style, "outlined" uses a bordered style.
 * @attr {("date"|"datetime-local"|"email"|"number"|"password"|"search"|"tel"|"text"|"time"|"color"|"url")} type - Sets the input type.
 * @attr {string} label - The input's label text.
 * @attr {string} hint - The input's hint/helper text.
 * @attr {string} placeholder - Placeholder text shown when the input is empty.
 * @attr {boolean} with-clear - Adds a clear button when the input is not empty.
 * @attr {boolean} readonly - Makes the input readonly.
 * @attr {boolean} disabled - Disables the input and prevents user interaction.
 * @attr {boolean} required - Makes the input a required field.
 * @attr {boolean} password-toggle - Adds a button to toggle the password visibility.
 * @attr {boolean} without-spin-buttons - Hides the browser's built-in spin buttons for number inputs.
 * @attr {boolean} auto-validate - Validates the input on blur instead of on form submit.
 * @attr {boolean} invalid - Marks the input as invalid.
 * @attr {boolean} inset-label - Uses an inset label style where the label stays inside the input.
 * @attr {string} validation-message - Custom validation message shown when the input is invalid.
 */
export declare class HaInput extends LitElement {
    appearance: "material" | "outlined";
    type: InputType;
    value?: string;
    /** The input's label. */
    label: string;
    /** The input's hint. */
    hint?: string;
    /** Adds a clear button when the input is not empty. */
    withClear: boolean;
    /** Placeholder text to show as a hint when the input is empty. */
    placeholder: string;
    /** Makes the input readonly. */
    readonly: boolean;
    /** Adds a button to toggle the password's visibility. */
    passwordToggle: boolean;
    /** Determines whether or not the password is currently visible. */
    passwordVisible: boolean;
    /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
    withoutSpinButtons: boolean;
    /** Makes the input a required field. */
    required: boolean;
    /** A regular expression pattern to validate input against. */
    pattern?: string;
    /** The minimum length of input that will be considered valid. */
    minlength?: number;
    /** The maximum length of input that will be considered valid. */
    maxlength?: number;
    /** The input's minimum value. Only applies to date and number input types. */
    min?: number | string;
    /** The input's maximum value. Only applies to date and number input types. */
    max?: number | string;
    /** Specifies the granularity that the value must adhere to. */
    step?: number | "any";
    /** Controls whether and how text input is automatically capitalized. */
    autocapitalize: "off" | "none" | "on" | "sentences" | "words" | "characters" | "";
    /** Indicates whether the browser's autocorrect feature is on or off. */
    autocorrect: boolean;
    /** Specifies what permission the browser has to provide assistance in filling out form field values. */
    autocomplete?: string;
    /** Indicates that the input should receive focus on page load. */
    autofocus: boolean;
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    enterkeyhint: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | "";
    /** Enables spell checking on the input. */
    spellcheck: boolean;
    /** Tells the browser what type of data will be entered by the user. */
    inputmode: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url" | "";
    /** The name of the input, submitted as a name/value pair with form data. */
    name?: string;
    /** Disables the form control. */
    disabled: boolean;
    /** Custom validation message to show when the input is invalid. */
    validationMessage?: string;
    /** When true, validates the input on blur instead of on form submit. */
    autoValidate: boolean;
    invalid: boolean;
    insetLabel: boolean;
    private _invalid;
    private _input?;
    private readonly _hasSlotController;
    static shadowRootOptions: ShadowRootInit;
    /** Selects all the text in the input. */
    select(): void;
    /** Sets the start and end positions of the text selection (0-based). */
    setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: "forward" | "backward" | "none"): void;
    /** Replaces a range of text with a new string. */
    setRangeText(replacement: string, start?: number, end?: number, selectMode?: "select" | "start" | "end" | "preserve"): void;
    /** Displays the browser picker for an input element. */
    showPicker(): void;
    /** Increments the value of a numeric input type by the value of the step attribute. */
    stepUp(): void;
    /** Decrements the value of a numeric input type by the value of the step attribute. */
    stepDown(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    protected firstUpdated(changedProperties: PropertyValues): Promise<void>;
    protected render(): TemplateResult<1>;
    protected renderStartDefault(): TemplateResult | typeof nothing;
    protected renderEndDefault(): TemplateResult | typeof nothing;
    private _handleInput;
    private _handleChange;
    private _handleBlur;
    private _handleInvalid;
    private _syncStartSlotWidth;
    private _renderLabel;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input": HaInput;
    }
}
