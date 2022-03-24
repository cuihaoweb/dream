import commonjs from '@rollup/plugin-commonjs';
import strip from '@rollup/plugin-strip';
import typescript from '@rollup/plugin-typescript';
import cleanup from 'rollup-plugin-cleanup';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.ts',
    output: {
        file: 'lib/index.js',
        format: 'cjs'
    },
    plugins: [
        commonjs(),
        json(),
        typescript(),
        cleanup({
            sourcemap: false,
            exclude: 'node_modules/**',
            comments: 'eslint'
        }),
        strip({sourcemap: false})
    ]
};
