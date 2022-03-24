module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/no-var-requires': [0]
    }
};
