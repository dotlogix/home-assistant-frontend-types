import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-code-editor";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-dialog-header";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-markdown";
import "../../../components/ha-spinner";
import "../../../components/input/ha-input";
import type { HomeAssistant } from "../../../types";
declare class DialogImportBlueprint extends LitElement {
    hass: HomeAssistant;
    large: boolean;
    private _params?;
    private _open;
    private _importing;
    private _saving;
    private _error?;
    private _result?;
    private _url?;
    private _sourceUrlWarning;
    private _input?;
    showDialog(params: any): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _enlarge;
    private _import;
    private _isTrustedBlueprintUrl;
    private _save;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-import-blueprint": DialogImportBlueprint;
    }
}
export {};
