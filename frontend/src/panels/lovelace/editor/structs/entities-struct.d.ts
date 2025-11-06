export declare const entitiesConfigStruct: import("superstruct").Struct<string | {
    entity: string;
    image: string;
    name: string | {
        type: "text";
        text: string;
    } | {
        type: "entity" | "device" | "area" | "floor";
    } | (string | {
        type: "text";
        text: string;
    } | {
        type: "entity" | "device" | "area" | "floor";
    })[];
    icon: string;
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
    format: "time" | "date" | "datetime" | "total" | "relative";
    show_state: boolean;
    show_last_changed: boolean;
    state_color: boolean;
    secondary_info: string;
    double_tap_action?: any;
    hold_action?: any;
    tap_action?: any;
}, null>;
