import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-form/ha-form";
import "../../../components/ha-icon-button";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-footer";
import type { HomeAssistant } from "../../../types";
import "./assist-pipeline-detail/assist-pipeline-detail-config";
import "./assist-pipeline-detail/assist-pipeline-detail-conversation";
import "./assist-pipeline-detail/assist-pipeline-detail-stt";
import "./assist-pipeline-detail/assist-pipeline-detail-tts";
import "./assist-pipeline-detail/assist-pipeline-detail-wakeword";
import "./debug/assist-render-pipeline-events";
import type { VoiceAssistantPipelineDetailsDialogParams } from "./show-dialog-voice-assistant-pipeline-detail";
export declare class DialogVoiceAssistantPipelineDetail extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _data?;
    private _hideWakeWord;
    private _cloudActive?;
    private _error?;
    private _submitting;
    private _supportedLanguages?;
    showDialog(params: VoiceAssistantPipelineDetailsDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected firstUpdated(): void;
    private _getSupportedLanguages;
    private _hasWakeWorkEntities;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleDropdownSelect;
    private _valueChanged;
    private _updatePipeline;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-voice-assistant-pipeline-detail": DialogVoiceAssistantPipelineDetail;
    }
}
