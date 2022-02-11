const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");
const { ENV, PATH_ROOT } = require('./config');

module.exports = {
    mode: ENV,
    entry: require('../components/index.json'),
    output: {
        clean: true,
        filename: '[name]/index.js',
        path: path.resolve(PATH_ROOT, './lib'),
        chunkFilename: '[name]/[name].js',
        library: '@dream/vue-ui',
        libraryTarget: 'umd'
    },
    cache: {
        type: 'filesystem'
    },
    resolve: {
        // 扩展名
        extensions: ['.ts', '.js', '.vue', '.css']
    },
    externals: {
        vue: 'vue'
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
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]/style.css'
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin({
                // 开启多线程的数量
                parallel: 7
            })
        ]
    }
};
