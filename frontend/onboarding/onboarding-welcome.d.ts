import "@home-assistant/webawesome/dist/components/divider/divider";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-button";
import "../components/ha-icon-button-next";
import "../components/ha-md-list";
import "../components/ha-md-list-item";
import type { HomeAssistant } from "../types";
declare class OnboardingWelcome extends LitElement {
    hass: HomeAssistant;
    localize: LocalizeFunc;
    protected render(): TemplateResult;
    private _start;
    private _restoreBackupUpload;
    private _restoreBackupCloud;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-welcome": OnboardingWelcome;
    }
}
export {};
