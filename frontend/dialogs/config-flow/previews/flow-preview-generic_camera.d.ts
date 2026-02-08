import { nothing } from "lit";
import { FlowPreviewGeneric } from "./flow-preview-generic";
import "../../../components/ha-hls-player";
import "../../../components/ha-spinner";
declare class FlowPreviewGenericCamera extends FlowPreviewGeneric {
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _videoLoaded;
}
declare global {
    interface HTMLElementTagNameMap {
        "flow-preview-generic_camera": FlowPreviewGenericCamera;
    }
}
export {};
