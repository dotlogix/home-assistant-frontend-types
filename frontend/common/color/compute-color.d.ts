export declare const THEME_COLORS: Set<string>;
export declare function computeCssColor(color: string): string;
/**
 * Validates if a string is a valid color.
 * Accepts: hex colors (#xxx, #xxxxxx), theme colors, and valid CSS color names.
 */
export declare function isValidColorString(color: string | undefined): boolean;
