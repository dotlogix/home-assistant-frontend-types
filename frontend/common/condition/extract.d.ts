import type { Condition, TimeCondition } from "../../panels/lovelace/common/validate-condition";
/**
 * Extract media queries from conditions recursively
 */
export declare function extractMediaQueries(conditions: Condition[]): string[];
/**
 * Extract time conditions from conditions recursively
 */
export declare function extractTimeConditions(conditions: Condition[]): TimeCondition[];
