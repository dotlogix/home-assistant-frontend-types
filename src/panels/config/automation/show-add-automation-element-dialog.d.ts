import type { HassServiceTarget } from "home-assistant-js-websocket";
export declare const PASTE_VALUE = "__paste__";
export interface AddAutomationElementDialogParams {
    type: "trigger" | "condition" | "action";
    add: (key: string, target?: HassServiceTarget) => void;
    clipboardItem: string | undefined;
    clipboardPasteToastBottomOffset?: number;
}
export declare const showAddAutomationElementDialog: (element: HTMLElement, dialogParams: AddAutomationElementDialogParams) => void;
