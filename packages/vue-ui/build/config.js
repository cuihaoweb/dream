const path = require('path');


/* ========================= 路径 ========================= */
const PATH_ROOT = path.resolve(__dirname, '../');
const PATH_SRC = path.resolve(PATH_ROOT, './src');
const PATH_COMPONENTS = path.resolve(PATH_ROOT, './components');


/* ========================= 环境 ========================= */
const ENV = process.env.NODE_ENV;
const IS_PRODUCTION = ENV === 'production';
const IS_DEVELOPMENT = ENV === 'development';


module.exports = {
    PATH_ROOT,
    PATH_SRC,
    PATH_COMPONENTS,
    ENV,
    IS_DEVELOPMENT,
    IS_PRODUCTION
};
