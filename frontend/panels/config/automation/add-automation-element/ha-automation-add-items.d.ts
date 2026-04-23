import { LitElement, type TemplateResult } from "lit";
import "../../../../components/ha-md-list";
import "../../../../components/ha-md-list-item";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import type { ConfigEntry } from "../../../../data/config_entries";
import type { LabelRegistryEntry } from "../../../../data/label/label_registry";
import type { HomeAssistant } from "../../../../types";
import type { AddAutomationElementListItem } from "../add-automation-element-dialog";
type Target = [string, string | undefined, string | undefined];
export declare class HaAutomationAddItems extends LitElement {
    hass: HomeAssistant;
    items?: {
        title: string;
        items: AddAutomationElementListItem[];
    }[];
    error?: string;
    selectLabel: string;
    emptyLabel: string;
    emptyNote?: string | TemplateResult;
    target?: Target;
    getLabel: (id: string) => LabelRegistryEntry | undefined;
    configEntryLookup: Record<string, ConfigEntry>;
    tooltipDescription: boolean;
    scrollable: boolean;
    private _itemsScrolled;
    private _itemsDiv;
    protected render(): TemplateResult<1>;
    private _renderItemList;
    private _renderTarget;
    private _selected;
    private _onItemsScroll;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-add-items": HaAutomationAddItems;
    }
}
export {};
