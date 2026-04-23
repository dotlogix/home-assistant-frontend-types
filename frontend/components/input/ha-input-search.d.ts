import { type PropertyValues } from "lit";
import { HaInput } from "./ha-input";
/**
 * Home Assistant search input component
 *
 * @element ha-input-search
 * @extends {HaInput}
 *
 * @summary
 * A pre-configured search input that extends `ha-input` with a magnify icon, clear button,
 * and a localized "Search" placeholder. Autocomplete is disabled by default.
 */
export declare class HaInputSearch extends HaInput {
    private localize;
    constructor();
    willUpdate(changedProps: PropertyValues): void;
    protected renderStartDefault(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input-search": HaInputSearch;
    }
}
