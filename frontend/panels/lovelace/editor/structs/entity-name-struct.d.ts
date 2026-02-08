export declare const entityNameStruct: import("superstruct").Struct<string | {
    type: "text";
    text: string;
} | {
    type: "device" | "area" | "entity" | "floor";
} | (string | {
    type: "text";
    text: string;
} | {
    type: "device" | "area" | "entity" | "floor";
})[], null>;
