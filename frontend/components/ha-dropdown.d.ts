import Dropdown from "@home-assistant/webawesome/dist/components/dropdown/dropdown";
import { type CSSResultGroup } from "lit";
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
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dropdown": HaDropdown;
    }
}
