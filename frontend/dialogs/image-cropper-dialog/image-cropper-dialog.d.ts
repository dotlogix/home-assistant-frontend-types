import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-dialog-footer";
import "../../components/ha-dialog";
import type { HomeAssistant } from "../../types";
import type { HassDialog } from "../make-dialog-manager";
import type { HaImageCropperDialogParams } from "./show-image-cropper-dialog";
export declare class HaImagecropperDialog extends LitElement implements HassDialog<HaImageCropperDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _image;
    private _cropper?;
    private _isTargetAspectRatio?;
    showDialog(params: HaImageCropperDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected updated(changedProperties: PropertyValues): void;
    private _checkMatchAspectRatio;
    protected render(): TemplateResult | typeof nothing;
    private _cropImage;
    private _useOriginal;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "image-cropper-dialog": HaImagecropperDialog;
    }
}
