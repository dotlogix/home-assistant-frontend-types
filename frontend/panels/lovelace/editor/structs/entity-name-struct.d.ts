export declare const entityNameStruct: import("superstruct").Struct<string | {
    type: "text";
    text: string;
} | {
    type: "device" | "entity" | "area" | "floor";
} | (string | {
    type: "text";
    text: string;
} | {
    type: "device" | "entity" | "area" | "floor";
})[], null>;
