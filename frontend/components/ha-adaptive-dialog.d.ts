import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-bottom-sheet";
import "./ha-dialog-header";
import "./ha-icon-button";
import "./ha-wa-dialog";
import type { DialogWidth } from "./ha-wa-dialog";
/**
 * Home Assistant adaptive dialog component
 *
 * @element ha-adaptive-dialog
 * @extends {LitElement}
 *
 * @summary
 * A responsive dialog component that automatically switches between a full dialog (ha-wa-dialog)
 * and a bottom sheet (ha-bottom-sheet) based on screen size. Uses dialog mode on larger screens
 * (>870px width and >500px height) and bottom sheet mode on smaller screens or mobile devices.
 *
 * @slot headerNavigationIcon - Leading header action (e.g. close/back button).
 * @slot headerTitle - Custom title content (used when header-title is not set).
 * @slot headerSubtitle - Custom subtitle content (used when header-subtitle is not set).
 * @slot headerActionItems - Trailing header actions (e.g. buttons, menus).
 * @slot - Dialog/sheet content body.
 * @slot footer - Dialog/sheet footer content.
 *
 * @cssprop --ha-dialog-surface-background - Dialog/sheet background color.
 * @cssprop --ha-dialog-border-radius - Border radius of the dialog surface (dialog mode only).
 * @cssprop --ha-dialog-show-duration - Show animation duration (dialog mode only).
 * @cssprop --ha-dialog-hide-duration - Hide animation duration (dialog mode only).
 *
 * @attr {boolean} open - Controls the dialog/sheet open state.
 * @attr {("small"|"medium"|"large"|"full")} width - Preferred dialog width preset (dialog mode only). Defaults to "medium".
 * @attr {string} header-title - Header title text. If not set, the headerTitle slot is used.
 * @attr {string} header-subtitle - Header subtitle text. If not set, the headerSubtitle slot is used.
 * @attr {("above"|"below")} header-subtitle-position - Position of the subtitle relative to the title. Defaults to "below".
 * @attr {boolean} block-mode-change - When set, the mode is determined at mount time based on the current screen size, but subsequent mode changes are blocked. Useful for preventing forms from resetting when the viewport size changes.
 *
 * @event opened - Fired when the dialog/sheet is shown (dialog mode only).
 * @event closed - Fired after the dialog/sheet is hidden.
 * @event after-show - Fired after show animation completes (dialog mode only).
 *
 * @remarks
 * **Responsive Behavior:**
 * The component automatically switches between dialog and bottom sheet modes based on viewport size.
 * Dialog mode is used for screens wider than 870px and taller than 500px.
 * Bottom sheet mode is used for mobile devices and smaller screens.
 *
 * When `block-mode-change` is set, the mode is determined once at mount time based on the initial
 * screen size. Subsequent viewport size changes will not trigger mode switches, which is useful
 * for preventing form resets or other state loss when users resize their browser window.
 *
 * **Focus Management:**
 * To automatically focus an element when opened, add the `autofocus` attribute to it.
 * Components with `delegatesFocus: true` (like `ha-form`) will forward focus to their first focusable child.
 * Example: `<ha-form autofocus .schema=${schema}></ha-form>`
 */
export declare class HaAdaptiveDialog extends LitElement {
    hass: HomeAssistant;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    open: boolean;
    width: DialogWidth;
    headerTitle?: string;
    headerSubtitle?: string;
    headerSubtitlePosition: "above" | "below";
    blockModeChange: boolean;
    withoutHeader: boolean;
    private _mode;
    private _unsubMediaQuery?;
    private _modeSet;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-adaptive-dialog": HaAdaptiveDialog;
    }
}
