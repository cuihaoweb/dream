import path from 'path';
import fs from 'fs';
import {isString} from 'lodash';

/**
 * 将数据写入指定路径的文件中
 * @param {String} pathName 文件路径
 * @param {String} data 数据
 */
function writeFile (pathName, data) {
    if (!isString(data) || !isString(data)) {
        return;
    }
    if (path.isAbsolute(pathName)) {
        pathName = path.relative(__dirname, pathName);
    }
    const dirname = path.dirname(pathName);
    try {
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname, {recursive: true});
        }
        fs.writeFileSync(pathName, data);
    }
    catch (error) {
        throw new Error(error);
    }
}

export default writeFile;