const { VueLoaderPlugin } = require('vue-loader');
const path = require("path");
const { ENV, PATH_ROOT, IS_PRODUCTION, PATH_COMPONENTS } = require('./config');


module.exports = {
    mode: ENV,
    entry: require('../components/index.json'),
    output: {
        clean: true,
        filename: '[name].js',
        path: path.resolve(PATH_ROOT, './dist'),
        chunkFilename: '[name].js',
        library: 'dream-ui',
        libraryTarget: 'umd'
    },
    cache: {
        type: 'filesystem'
    },
    resolve: {
        // 扩展名
        extensions: ['.ts', '.js', '.vue']
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
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin()
    ],
};
