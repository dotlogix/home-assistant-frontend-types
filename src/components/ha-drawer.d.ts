import { DrawerBase } from "@material/mwc-drawer/mwc-drawer-base";
import type { PropertyValues } from "lit";
import type { HASSDomEvent } from "../common/dom/fire_event";
declare global {
    interface HASSDomEvents {
        "hass-layout-transition": {
            active: boolean;
            reason?: string;
        };
    }
    interface HTMLElementEventMap {
        "hass-layout-transition": HASSDomEvent<HASSDomEvents["hass-layout-transition"]>;
    }
}
export declare class HaDrawer extends DrawerBase {
    direction: "ltr" | "rtl";
    private _mc?;
    private _rtlStyle?;
    private _sidebarTransitionActive;
    private _handleDrawerTransitionStart;
    private _handleDrawerTransitionEnd;
    protected createAdapter(): {
        trapFocus: () => void;
        releaseFocus: () => void;
        addClass(className: string): void;
        removeClass(className: string): void;
        hasClass(className: string): boolean;
        elementHasClass(element: Element, className: string): boolean;
        saveFocus(): void;
        restoreFocus(): void;
        focusActiveNavigationItem(): void;
        notifyClose(): void;
        notifyOpen(): void;
    };
    protected updated(changedProps: PropertyValues<this>): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private _setupSwipe;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-drawer": HaDrawer;
    }
}
