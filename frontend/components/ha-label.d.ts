import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-tooltip";
declare class HaLabel extends LitElement {
    dense: boolean;
    description?: string;
    private _elementId;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-label": HaLabel;
    }
}
export {};
