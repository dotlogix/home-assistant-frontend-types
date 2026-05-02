export declare const actionConfigStructConfirmation: import("superstruct").Struct<boolean | {
    text: string;
    excemptions: {
        user: string;
    }[];
}, null>;
export declare const actionConfigStructType: import("superstruct").Struct<{
    action: "none" | "url" | "toggle" | "assist" | "call-service" | "perform-action" | "more-info" | "navigate";
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
}, {
    action: import("superstruct").Struct<"none" | "url" | "toggle" | "assist" | "call-service" | "perform-action" | "more-info" | "navigate", {
        none: "none";
        url: "url";
        toggle: "toggle";
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
