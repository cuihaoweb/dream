interface Output {
    format: string;
    file: string;
    name?: string;
}

export interface RollupOptions {
    inputs: string | Array<Record<string, string>>;
    output: Output;
}
