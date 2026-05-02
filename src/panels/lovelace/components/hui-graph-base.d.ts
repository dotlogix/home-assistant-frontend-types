import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
export declare class HuiGraphBase extends LitElement {
    coordinates?: number[][];
    yAxisOrigin?: number;
    private _path?;
    private _uniqueId;
    protected render(): TemplateResult;
    willUpdate(changedProps: PropertyValues<this>): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-graph-base": HuiGraphBase;
    }
}
