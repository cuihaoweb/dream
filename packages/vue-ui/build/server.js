let open = require('open');
const chalk = require('chalk');
const webpack = require("webpack");
// const devMiddleware = require("webpack-dev-middleware");
const fastify = require("fastify")();
const webpackConfig = require("./webpack.dev");


const compiler = webpack(webpackConfig);
const { publicPath } = webpackConfig.output;


const run = async (callback) => {
    await fastify.register(require("fastify-express"));
    await fastify.use(require("webpack-dev-middleware")(compiler, { publicPath }));
    await fastify.use(require("webpack-hot-middleware")(compiler));
    await fastify.listen(3001);
    callback();
};


run(() => {
    console.log(`\n服务运行在: ${chalk.blue('http://localhost:3001')}\n`);
    open('http://localhost:3001');
});