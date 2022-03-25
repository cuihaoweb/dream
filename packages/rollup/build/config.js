import path from 'path';

/* ========================= 构建选项 ========================= */
export const FORMAT = 'cjs';
export const BANNER = '#!/usr/bin/env node';

/* ========================= 环境 ========================= */
export const ENV = process.env.NODE_ENV;
export const IS_PRODUCTION = ENV === 'production';
export const IS_DEVELOPMENT = ENV === 'development';

/* ========================= 路径 ========================= */
export const INPUT_PATH = path.resolve(__dirname, '../src/index.ts');
export const OUTPUT_PATH = path.resolve(__dirname, '../lib/index.js');
