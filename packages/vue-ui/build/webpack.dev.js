const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require('webpackbar');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const path = require("path");
const { ENV, PATH_SRC, PATH_ROOT, IS_PRODUCTION } = require('./config');


module.exports = {
    mode: ENV,
    stats: 'normal',
    entry: [
        // 入口文件
        path.resolve(PATH_SRC, './index.ts'),
        // 热更新入口
        'webpack-hot-middleware/client?path=/__webpack_hmr&heartbeat=60000'
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(PATH_ROOT, './dist'),
        chunkFilename: '[name].[chunkhash].js',
        // 静态资源url的prefix
        publicPath: IS_PRODUCTION ? '/' : '/',
        // 使用异步加载chunk
        asyncChunks: true,
        compareBeforeEmit: true
    },
    cache: {
        type: 'filesystem'
    },
    resolve: {
        // 扩展名
        extensions: ['.ts', '.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                // ts-loader编译阶段会进行类型检查, 其他loader不行
                loader: 'ts-loader',
                options: {
                    // 解析script中lang=ts的代码块
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        // 代码热更新插件
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new WebpackBar({
            profile: true
        })
    ],
};
