export declare const actionConfigStructConfirmation: import("superstruct").Struct<boolean | {
    text: string;
    excemptions: {
        user: string;
    }[];
}, null>;
export declare const actionConfigStructType: import("superstruct").Struct<{
    action: "toggle" | "none" | "url" | "assist" | "call-service" | "perform-action" | "more-info" | "navigate";
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
}, {
    action: import("superstruct").Struct<"toggle" | "none" | "url" | "assist" | "call-service" | "perform-action" | "more-info" | "navigate", {
        toggle: "toggle";
        none: "none";
        url: "url";
        assist: "assist";
        "call-service": "call-service";
        "perform-action": "perform-action";
        "more-info": "more-info";
        navigate: "navigate";
    }>;
    confirmation: import("superstruct").Struct<boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    }, null>;
}>;
export declare const actionConfigStruct: import("superstruct").Struct<any, null>;
