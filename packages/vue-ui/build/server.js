let open = require('open');
const chalk = require('chalk');
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const fastify = require("fastify")();
const webpackConfig = require("./webpack.dev");


const compiler = webpack(webpackConfig);
const { publicPath } = webpackConfig.output;


const run = async (callback) => {
    await fastify.register(require("fastify-express"));
    await fastify.use(devMiddleware(compiler, { publicPath }));
    await fastify.listen(3001);
    callback();
};


run(() => {
    console.log(`服务运行在: ${chalk.blue('http://localhost:3001')}`);
    open('http://localhost:3001');
});