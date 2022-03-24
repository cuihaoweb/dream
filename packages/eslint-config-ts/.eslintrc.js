module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        '@dream/base',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/no-var-requires': [0]
    }
};