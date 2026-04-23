import { LitElement, nothing } from "lit";
import type { LocalizeFunc } from "../../common/translations/localize";
import "../../components/ha-dialog";
declare class DialogApp extends LitElement {
    localize?: LocalizeFunc;
    private _open;
    showDialog(params: {
        localize: LocalizeFunc;
    }): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "app-dialog": DialogApp;
    }
}
export {};
