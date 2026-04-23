import "@home-assistant/webawesome/dist/components/popover/popover";
import "cally";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-bottom-sheet";
import "../ha-icon-button";
import "../ha-icon-button-next";
import "../ha-icon-button-prev";
import "../ha-textarea";
import "./date-range-picker";
export type DateRangePickerRanges = Record<string, [Date, Date]>;
export declare class HaDateRangePicker extends LitElement {
    private localize;
    private locale;
    private hassConfig;
    startDate: Date;
    endDate: Date;
    ranges?: DateRangePickerRanges | false;
    private _ranges?;
    timePicker: boolean;
    backdrop: boolean;
    disabled: boolean;
    minimal: boolean;
    extendedPresets: boolean;
    popoverPlacement: "bottom" | "top" | "left" | "right" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end";
    private _opened;
    private _pickerWrapperOpen;
    private _openedNarrow;
    private _popoverWidth;
    private _containerElement?;
    private _narrow;
    private _unsubscribeTinyKeys?;
    connectedCallback(): void;
    open(): void;
    protected render(): TemplateResult;
    private _renderPicker;
    private _hidePicker;
    disconnectedCallback(): void;
    private _handleResize;
    private _dialogOpened;
    private _handlePopoverHide;
    private _handleNext;
    private _handlePrev;
    private _shift;
    private _closePicker;
    private _openPicker;
    private _handleKeydown;
    private _handleEscClose;
    private _setTextareaFocusStyle;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-date-range-picker": HaDateRangePicker;
    }
}
