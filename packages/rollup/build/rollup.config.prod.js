import merge from 'webpack-merge';
import strip from '@rollup/plugin-strip';
import cleanup from 'rollup-plugin-cleanup';
import commonConfig from './rollup.config.common';

export default merge(commonConfig, {
    plugins: [
        cleanup({
            sourcemap: false,
            exclude: 'node_modules/**',
            comments: 'eslint'
        }),
        strip({sourcemap: false})
    ]
});
