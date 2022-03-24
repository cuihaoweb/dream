import {getRelativePath} from '../lib';
import path from 'path';

test('getRelativePath 获取相对路径', () => {
    expect(() => getRelativePath()).toThrow();
    expect(() => getRelativePath(1)).toThrow();
    expect(getRelativePath('./lib')).toMatch(/^\.\/lib/);
    expect(getRelativePath(path.resolve(__dirname, '../lib/index.js'))).toMatch(/^lib\/index\.js/);
});
