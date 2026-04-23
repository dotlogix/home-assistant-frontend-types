import Dropdown from "@home-assistant/webawesome/dist/components/dropdown/dropdown";
import { type CSSResultGroup } from "lit";
import type { HaDropdownItem } from "./ha-dropdown-item";
import type { HaIconButton } from "./ha-icon-button";
/**
 * Event type for the ha-dropdown component when an item is selected.
 * @param T - The type of the value of the selected item.
 */
export type HaDropdownSelectEvent<T = string> = CustomEvent<{
    item: Omit<HaDropdownItem, "value"> & {
        value: T;
    };
}>;
/**
 * Home Assistant dropdown component
 *
 * @element ha-dropdown
 * @extends {Dropdown}
 *
 * @summary
 * A stylable dropdown component supporting Home Assistant theming, variants, and appearances based on webawesome dropdown.
 *
 */
export declare class HaDropdown extends Dropdown {
    dropdownTag: string;
    dropdownItemTag: string;
    get anchorElement(): HTMLButtonElement | HaIconButton | undefined;
    set anchorElement(element: HTMLButtonElement | HaIconButton | undefined);
    /** Get the slotted trigger button, a <wa-button> or <button> element */
    private getTrigger;
    private showMenu;
    private hideMenu;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dropdown": HaDropdown;
    }
}
