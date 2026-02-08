import "@material/mwc-list/mwc-list";
import { LitElement, type PropertyValues } from "lit";
import type { LocalizeFunc } from "../../../../common/translations/localize";
import "../../../../components/chips/ha-chip-set";
import "../../../../components/chips/ha-filter-chip";
import "../../../../components/entity/state-badge";
import "../../../../components/ha-button-toggle-group";
import "../../../../components/ha-combo-box-item";
import "../../../../components/ha-domain-icon";
import "../../../../components/ha-floor-icon";
import "../../../../components/ha-icon-next";
import type { PickerComboBoxItem } from "../../../../components/ha-picker-combo-box";
import "../../../../components/ha-section-title";
import "../../../../components/ha-tree-indicator";
import { type FloorComboBoxItem } from "../../../../data/area_floor_picker";
import type { ConfigEntry } from "../../../../data/config_entries";
import { type EntityComboBoxItem } from "../../../../data/entity/entity_picker";
import type { DomainManifestLookup } from "../../../../data/integration";
import { type FuseWeightedKey } from "../../../../resources/fuseMultiTerm";
import type { HomeAssistant } from "../../../../types";
import type { AddAutomationElementListItem } from "../add-automation-element-dialog";
import type { AddAutomationElementDialogParams } from "../show-add-automation-element-dialog";
export declare const ITEM_SEARCH_KEYS: FuseWeightedKey[];
export declare class HaAutomationAddSearch extends LitElement {
    hass: HomeAssistant;
    filter: string;
    configEntryLookup: Record<string, ConfigEntry>;
    manifests?: DomainManifestLookup;
    items: AddAutomationElementListItem[];
    narrow: boolean;
    newTriggersAndConditions: boolean;
    convertToItem: (key: string, options: any, type: AddAutomationElementDialogParams["type"], localize: LocalizeFunc) => AddAutomationElementListItem;
    addElementType: "trigger" | "condition" | "action";
    private _searchSectionTitle?;
    private _selectedSearchSection?;
    private _searchListScrolled;
    private _labelRegistry;
    private _virtualizerElement?;
    private _getDevicesMemoized;
    private _getLabelsMemoized;
    private _getEntitiesMemoized;
    private _getAreasAndFloorsMemoized;
    private _selectedSearchItemIndex;
    private _removeKeyboardShortcuts?;
    private get _showEntityId();
    protected willUpdate(changedProps: PropertyValues): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderSections;
    private _renderSearchResultRow;
    private _onScrollSearchList;
    private _visibilityChanged;
    private _keyFunction;
    private _createFuseIndex;
    private _fuseIndexes;
    private _getFilteredItems;
    private _filterGroup;
    private _toggleSection;
    private _getSearchSectionLabel;
    private _convertItemsToComboBoxItems;
    private _focusSearchList;
    private _selectSearchResult;
    private _resetSelectedSearchItem;
    private _selectNextSearchItem;
    private _scrollToSelectedSearchItem;
    private _selectPreviousSearchItem;
    private _selectFirstSearchItem;
    private _selectLastSearchItem;
    private _pickSelectedSearchItem;
    private _selectSearchItem;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-add-search": HaAutomationAddSearch;
    }
    interface HASSDomEvents {
        "search-element-picked": PickerComboBoxItem | FloorComboBoxItem | EntityComboBoxItem;
    }
}
