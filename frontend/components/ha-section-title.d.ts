import { LitElement } from "lit";
declare class HaSectionTitle extends LitElement {
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-section-title": HaSectionTitle;
    }
}
export {};
