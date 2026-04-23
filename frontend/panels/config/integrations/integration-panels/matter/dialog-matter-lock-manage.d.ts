import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import type { MatterLockManageDialogParams } from "./show-dialog-matter-lock-manage";
declare class DialogMatterLockManage extends LitElement {
    hass: HomeAssistant;
    private _entityId?;
    private _lockInfo?;
    private _users;
    private _loading;
    private _open;
    showDialog(params: MatterLockManageDialogParams): Promise<void>;
    private _fetchData;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderUsers;
    private _handleUserClick;
    private _handleDeleteUserClick;
    private _addUser;
    private _editUser;
    private _deleteUser;
    closeDialog(): void;
    private _dialogClosed;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-lock-manage": DialogMatterLockManage;
    }
}
export {};
