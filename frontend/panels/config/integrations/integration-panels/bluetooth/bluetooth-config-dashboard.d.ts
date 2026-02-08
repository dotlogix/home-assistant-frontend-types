import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-list";
import "../../../../../components/ha-list-item";
import "../../../../../layouts/hass-tabs-subpage";
import type { PageNavigation } from "../../../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
export declare const bluetoothTabs: PageNavigation[];
export declare class BluetoothConfigDashboard extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _configEntries;
    private _connectionAllocationData;
    private _scannerStates;
    private _scannerDetails?;
    private _unsubConnectionAllocations?;
    private _unsubScannerState?;
    private _unsubScannerDetails?;
    connectedCallback(): void;
    private _loadConfigEntries;
    private _subscribeBluetoothConnectionAllocations;
    private _subscribeBluetoothScannerState;
    private _subscribeScannerDetails;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _renderAdaptersList;
    private _renderScannerMismatchWarning;
    private _formatMode;
    private _formatModeLabel;
    private _formatScannerModeText;
    private _openOptionFlow;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "bluetooth-config-dashboard": BluetoothConfigDashboard;
    }
}
