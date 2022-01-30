export declare type ButtonType = 'default' | 'waring' | 'error';

export declare enum ButtonTheme {
    default = 'blue',
    waring = 'yellow',
    error = 'red'
}

export declare interface Button {
    type?: ButtonType,
    value?: string
}

export declare interface ButtonEmits {
    (e: 'click'): void
}