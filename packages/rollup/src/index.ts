import path from 'path';
import {rollup, RollupOptions, ModuleFormat, OutputOptions, OutputChunk} from 'rollup';
import {Command} from 'commander';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import cleanup from 'rollup-plugin-cleanup';
import json from '@rollup/plugin-json';
import {writeFile} from '@dream/tools';


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

    private generateInputConfig(): RollupOptions {
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

    private generateOutputConfig(): OutputOptions {
        return {
            file: this.output,
            format: this.format
        };
    }

    async build(): Promise<void> {
        const bundle = await rollup(this.generateInputConfig());
        const {output} = await bundle.generate(this.generateOutputConfig());
        output.forEach(chunk =>  {
            const {code, fileName} = chunk as OutputChunk;
            console.log(fileName);
            writeFile(this.output, code);
        });
    }
}

new DreamRollup();
