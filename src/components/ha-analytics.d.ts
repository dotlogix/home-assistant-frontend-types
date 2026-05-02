import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import type { Analytics, AnalyticsPreferences } from "../data/analytics";
import "./ha-md-list-item";
import "./ha-switch";
import "./ha-tooltip";
declare global {
    interface HASSDomEvents {
        "analytics-preferences-changed": {
            preferences: AnalyticsPreferences;
        };
    }
}
export declare class HaAnalytics extends LitElement {
    localize: LocalizeFunc;
    analytics?: Analytics;
    translationKeyPanel: "page-onboarding" | "config";
    protected render(): TemplateResult;
    private _handleRowClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-analytics": HaAnalytics;
    }
}
