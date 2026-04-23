import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button";
import "../../components/ha-code-editor";
import "../../components/ha-icon-button";
import "../../components/ha-top-app-bar-fixed";
import type { HomeAssistant } from "../../types";
import type { Lovelace } from "./types";
declare class LovelaceFullConfigEditor extends LitElement {
    narrow: boolean;
    hass: HomeAssistant;
    lovelace?: Lovelace;
    closeEditor?: () => void;
    private _saving?;
    private _changed?;
    protected render(): TemplateResult | undefined;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    static get styles(): CSSResultGroup;
    private _yamlChanged;
    private _closeEditor;
    private _resetConfig;
    private _handleSave;
    private get yamlEditor();
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-editor": LovelaceFullConfigEditor;
    }
}
export {};
