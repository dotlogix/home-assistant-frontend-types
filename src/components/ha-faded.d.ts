import type { TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
declare class HaFaded extends LitElement {
    fadedHeight: number;
    _contentShown: boolean;
    protected render(): TemplateResult;
    get _slottedHeight(): number;
    private _setShowContent;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _showContent;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-faded": HaFaded;
    }
    interface HASSDomEvents {
        "content-resize": undefined;
    }
}
export {};
