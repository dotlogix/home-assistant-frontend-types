import { LitElement } from "lit";
import type { PropertyValues } from "lit";
import { type LovelaceSectionBackgroundConfig } from "../../../data/lovelace/config/section";
export declare class HuiSectionBackground extends LitElement {
    background?: boolean | LovelaceSectionBackgroundConfig;
    protected render(): symbol;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section-background": HuiSectionBackground;
    }
}
