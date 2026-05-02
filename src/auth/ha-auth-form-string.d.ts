import { HaFormString } from "../components/ha-form/ha-form-string";
import "../components/ha-icon-button";
import "../components/input/ha-input";
export declare class HaAuthFormString extends HaFormString {
    protected createRenderRoot(): this;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-auth-form-string": HaAuthFormString;
    }
}
