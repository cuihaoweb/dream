/*
 * @Description: 代码风格
 */

module.exports = {
    // 缩进
    indent: [2, 4],
    // 引号
    quotes: [2,'single'],
    // 对象属性引号
    'quote-props': [2, 'as-needed'],
    // 末尾加;
    semi: ['error', 'always'],
    // 行不允许空格
    'no-trailing-spaces': [2, {skipBlankLines: true}],
    // 大括号空格
    'object-curly-spacing': [2, 'never'],
    // if-else try-cache换行
    'brace-style': [2, 'stroustrup'],
    // 文件结尾空行
    'eol-last': [2, 'always'],
    // 空行的数量
    'no-multiple-empty-lines': [2, {max: 2, maxEOF: 1}]
};
