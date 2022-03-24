import path from 'path';
import {isString} from 'lodash';

function getRelativePath(pathName) {
    if (!isString(pathName)) {
        throw new Error('pathName is not a string');
    }
    if (!path.isAbsolute(pathName)) {
        return pathName;
    }
    return path.relative(process.cwd(), pathName);
}

export {getRelativePath};
