import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-select";
import "../../../components/ha-button";
import "../../../components/ha-svg-icon";
import type { MediaPlayerEntity } from "../../../data/media-player";
import type { HomeAssistant } from "../../../types";
import "../../../components/ha-md-button-menu";
import "../../../components/chips/ha-assist-chip";
import "../../../components/ha-md-menu-item";
import "../../../components/ha-marquee-text";
declare class MoreInfoMediaPlayer extends LitElement {
    hass: HomeAssistant;
    stateObj?: MediaPlayerEntity;
    private _positionSlider?;
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
    private _toggleMute;
    private _selectedValueChanged;
    private _handleSourceClick;
    private _handleSoundModeClick;
    private _showBrowseMedia;
    private _showGroupMediaPlayers;
    private _handleMediaSeekChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-media_player": MoreInfoMediaPlayer;
    }
}
export {};
