interface DeepEqualOptions {
    /** Compare Symbol properties in addition to string keys */
    compareSymbols?: boolean;
}
export declare const deepEqual: (a: any, b: any, options?: DeepEqualOptions) => boolean;
export {};
