import {INPUT_PATH, OUTPUT_PATH, FORMAT, BANNER} from './config';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';


console.log(INPUT_PATH);
export default {
    input: INPUT_PATH,
    output: {
        file: OUTPUT_PATH,
        format: FORMAT,
        banner: BANNER,
    },
    plugins: [
        commonjs(),
        json(),
        typescript()
    ]
};
