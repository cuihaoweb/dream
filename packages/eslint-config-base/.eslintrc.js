const codeStyle = require('./rules/codeStyle');
const codeQuality = require('./rules/codeQuality');

module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        ...codeStyle,
        ...codeQuality
    }
};
