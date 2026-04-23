import type { TemplateResult } from "lit";
interface BaseDialogBoxParams {
    confirmText?: string;
    text?: string | TemplateResult;
    title?: string;
    warning?: boolean;
}
export interface AlertDialogParams extends BaseDialogBoxParams {
    confirm?: () => void;
}
export interface ConfirmationDialogParams extends BaseDialogBoxParams {
    dismissText?: string;
    confirm?: () => void;
    cancel?: () => void;
    destructive?: boolean;
    action?: () => Promise<void>;
}
export interface PromptDialogParams extends BaseDialogBoxParams {
    inputLabel?: string;
    inputSuffix?: string;
    dismissText?: string;
    inputType?: string;
    defaultValue?: string;
    placeholder?: string;
    confirm?: (out?: string) => void;
    cancel?: () => void;
    inputMin?: number | string;
    inputMax?: number | string;
    action?: (value?: string) => Promise<void>;
}
export interface DialogBoxParams extends ConfirmationDialogParams, PromptDialogParams {
    confirm?: (out?: string) => void;
    confirmation?: boolean;
    prompt?: boolean;
    action?: (value?: string) => Promise<void>;
}
export declare const loadGenericDialog: () => Promise<typeof import("./dialog-box")>;
export declare const showAlertDialog: (element: HTMLElement, dialogParams: AlertDialogParams) => Promise<unknown>;
export declare const showConfirmationDialog: (element: HTMLElement, dialogParams: ConfirmationDialogParams) => Promise<boolean>;
export declare const showPromptDialog: (element: HTMLElement, dialogParams: PromptDialogParams) => Promise<null | string>;
export {};
