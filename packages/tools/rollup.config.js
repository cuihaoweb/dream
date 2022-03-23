import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import strip from '@rollup/plugin-strip';

export default {
    input: './src/node/writeFile.js',
    output: {
        format: 'cjs',
        file: 'lib/writeFile.js'
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        }),
        strip({sourcemap: false}),
        cleanup({
            exclude: 'node_modules/**',
            sourcemap: false,
            comments: "none"
        })
    ]
}
