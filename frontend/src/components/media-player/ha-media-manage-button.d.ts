import { LitElement, nothing } from "lit";
import type { MediaPlayerItem } from "../../data/media-player";
import type { HomeAssistant } from "../../types";
import "../ha-svg-icon";
import "../ha-button";
declare global {
    interface HASSDomEvents {
        "media-refresh": unknown;
    }
}
declare class MediaManageButton extends LitElement {
    hass: HomeAssistant;
    currentItem?: MediaPlayerItem;
    _uploading: number;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _manage;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-manage-button": MediaManageButton;
    }
}
export {};
