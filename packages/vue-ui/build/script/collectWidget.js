const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { PATH_COMPONENTS } = require('../config');


let dirs = [];
try {
    dirs = fs.readdirSync(PATH_COMPONENTS);
} catch (err) {
    throw Error('读取组件目录错误:\t', err);
}

const widgets = {};
try {
    dirs.forEach(widget => {
        const pathhName = path.join(PATH_COMPONENTS, widget);
        if (fs.lstatSync(pathhName).isFile()) return;
        const fullPath = path.resolve(pathhName, 'index.ts');
        widgets[widget.toLowerCase()] = fullPath;
    });
} catch (err) {
    throw Error('收集组件错误:\t', err);
}

try {
    const content = JSON.stringify(widgets, null, '\t');
    const inputFile = path.resolve(PATH_COMPONENTS, './index.json');
    fs.writeFileSync(inputFile, content, { 'flag': 'w' });
} catch (err) {
    throw Error('写入组件信息错误:\t', err);
}

console.log(chalk.green('组件收集成功, 开始构建'));
console.log(chalk.green('构建中...'));