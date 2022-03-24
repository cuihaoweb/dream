const path = require('path');
import {rollup, RollupOptions, ModuleFormat} from 'rollup';
import {Command} from 'commander';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import cleanup from 'rollup-plugin-cleanup';
import json from '@rollup/plugin-json';


class DreamRollup {
    private execDir: string = process.cwd();
    output: string = path.resolve(process.cwd(), 'lib/index.js');
    private program = new Command();
    input: string;
    format:ModuleFormat = 'es';

    constructor() {
        const options = this.getOptions();
        this.input = options.input;
        this.output = options.output;
        this.build();
    }

    private getOptions(): DreamRollup {
        this.program
            .option('-c, --config <config>', 'location of the configuration file');
        this.program.parse(process.argv);
        const configPath = this.program.opts().config;
        return require(path.resolve(this.execDir, configPath));
    }

    private generateRollupConfig(): RollupOptions {
        console.log(this.input);
        return {
            input: this.input,
            plugins: [
                commonjs(),
                resolve(),
                json(),
                strip(),
                cleanup()
            ]
        };
    }

    async build() {
        const bundle = await rollup(this.generateRollupConfig());
        console.log(bundle);
    }
}

new DreamRollup();
