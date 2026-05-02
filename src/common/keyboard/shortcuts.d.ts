/**
 * A function to handle a keyboard shortcut.
 */
export type ShortcutHandler = (event: KeyboardEvent) => void;
/**
 * Configuration for a keyboard shortcut.
 */
export interface ShortcutConfig {
    handler: ShortcutHandler;
    /**
     * If true, allows shortcuts even when text is selected.
     * Default is false to avoid interrupting copy/paste.
     */
    allowWhenTextSelected?: boolean;
    allowInInput?: boolean;
}
/**
 * Manages keyboard shortcuts registration and cleanup.
 */
export declare class ShortcutManager {
    private _disposer?;
    /**
     * Register keyboard shortcuts.
     * Uses tinykeys syntax: https://github.com/jamiebuilds/tinykeys#usage
     */
    add(shortcuts: Record<string, ShortcutConfig>): void;
    /**
     * Remove all registered shortcuts.
     */
    remove(): void;
}
