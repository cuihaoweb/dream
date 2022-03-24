const codeStyle = require('./rules/codeStyle');
const codeQuality = require('./rules/codeQuality');

module.exports = {
    root: true,
    env: {
        jest: true,
        browser: true,
        es2021: true,
        node: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        ...codeStyle,
        ...codeQuality
    }
};
