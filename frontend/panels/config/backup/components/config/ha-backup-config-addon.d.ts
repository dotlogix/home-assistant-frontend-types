import { LitElement } from "lit";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-select";
import "../../../../../components/input/ha-input";
import type { SupervisorUpdateConfig } from "../../../../../data/supervisor/update";
import type { HomeAssistant } from "../../../../../types";
declare class HaBackupConfigAddon extends LitElement {
    hass: HomeAssistant;
    supervisorUpdateConfig?: SupervisorUpdateConfig;
    protected render(): import("lit-html").TemplateResult<1>;
    private _updatePreferenceChanged;
    private _backupRetentionChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-config-addon": HaBackupConfigAddon;
    }
}
export {};
