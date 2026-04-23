import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/chips/ha-assist-chip";
import "../../../components/ha-button";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-marquee-text";
import "../../../components/ha-select";
import "../../../components/ha-svg-icon";
import type { MediaPlayerEntity } from "../../../data/media-player";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoMediaPlayer extends LitElement {
    hass: HomeAssistant;
    stateObj?: MediaPlayerEntity;
    private _positionSlider?;
    private _volumeSlider?;
    private _progressInterval?;
    private _volumeStep;
    private _debouncedVolumeSet;
    private _volumeController;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    private _formatDuration;
    protected _renderVolumeControl(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected _renderSourceControl(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected _renderSoundMode(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected _renderGrouping(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected _renderEmptyCover(title: string, icon?: string): import("lit-html").TemplateResult<1>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _handleClick;
    protected updated(changedProps: PropertyValues): void;
    private _syncProgressInterval;
    private _clearProgressInterval;
    private _shouldUpdateProgress;
    private _toggleMute;
    private _setVolume;
    private _handleSourceChange;
    private _handleSoundModeChange;
    private _showBrowseMedia;
    private _showGroupMediaPlayers;
    private _handleMediaSeekChanged;
    private _handleVolumePointerDown;
    private _handleVolumePointerUp;
    private _handleVolumeInput;
    private _handleVolumeChange;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-media_player": MoreInfoMediaPlayer;
    }
}
export {};
