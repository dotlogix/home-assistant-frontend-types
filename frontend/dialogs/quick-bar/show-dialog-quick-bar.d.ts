export type QuickBarSection = "entity" | "device" | "area" | "navigate" | "command";
export interface QuickBarParams {
    entityFilter?: string;
    mode?: QuickBarSection;
    showHint?: boolean;
}
export declare const loadQuickBar: () => Promise<typeof import("./ha-quick-bar")>;
export declare const showQuickBar: (element: HTMLElement, dialogParams: QuickBarParams) => void;
export declare const closeQuickBar: () => void;
