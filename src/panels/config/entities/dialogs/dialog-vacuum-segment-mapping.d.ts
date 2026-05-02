import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-vacuum-segment-area-mapper";
import "../../../../components/ha-dialog";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { VacuumSegmentMappingDialogParams } from "./show-dialog-vacuum-segment-mapping";
export declare class DialogVacuumSegmentMapping extends LitElement implements HassDialog<VacuumSegmentMappingDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _areaMapping?;
    private _submitting;
    private _entry?;
    showDialog(params: VacuumSegmentMappingDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _loadCurrentMapping;
    private _dialogClosed;
    private _valueChanged;
    private _save;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-vacuum-segment-mapping": DialogVacuumSegmentMapping;
    }
}
