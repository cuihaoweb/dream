import {writeFile} from '../lib';

test('writeFile', () => {
    expect(writeFile()).toBeFalsy();
    expect(writeFile('a')).toBeFalsy();
    expect(writeFile('a', '')).toBeFalsy();
});
