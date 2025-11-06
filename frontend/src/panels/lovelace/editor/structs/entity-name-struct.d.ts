export declare const entityNameStruct: import("superstruct").Struct<string | {
    type: "text";
    text: string;
} | {
    type: "entity" | "device" | "area" | "floor";
} | (string | {
    type: "text";
    text: string;
} | {
    type: "entity" | "device" | "area" | "floor";
})[], null>;
