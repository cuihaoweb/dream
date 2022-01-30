export declare type InputType = 'text' | 'number' | 'color';

export declare interface Input {
    type?: InputType,
    value?: string
}

export declare interface ButtonEmits {
    (e: 'change', value: string | number): void,
    (e: 'focus'): void
}