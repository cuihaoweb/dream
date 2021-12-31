const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require('webpackbar');
const path = require("path");
const { ENV, PATH_SRC, PATH_ROOT, IS_PRODUCTION } = require('./config');


module.exports = {
    mode: ENV,
    stats: 'normal',
    entry: path.resolve(PATH_SRC, './index.js'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(PATH_ROOT, './dist'),
        chunkFilename: '[name].[chunkhash].js',
        publicPath: IS_PRODUCTION ? '/' : '/',
        asyncChunks: true,
        compareBeforeEmit: true
    },
    module: {
        rules: [
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new WebpackBar({
            profile: true
        })
    ],
};
