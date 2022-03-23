import writeFile from '../lib/writeFile';

test('writeFile', () => {
    expect(writeFile()).toBeFalsy();
    expect(writeFile('a')).toBeFalsy();
    expect(writeFile('a', '')).toBeFalsy();
});
